/**
 * Typewriter Action for Svelte
 * Automatically triggers typing animation when the element scrolls into view.
 */

export interface TypewriterParams {
  text: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  cursorColor?: 'primary' | 'accent';
  onComplete?: () => void;
}

export function typewriter(node: HTMLElement, params: TypewriterParams) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let interval: ReturnType<typeof setInterval> | null = null;
  let spans: HTMLSpanElement[] = [];

  node.setAttribute('aria-label', params.text);
  
  // Set up the DOM once: wrap each character in a span
  function setupDOM() {
    node.textContent = '';
    node.style.display = 'inline-flex';
    node.style.flexWrap = 'wrap';

    const words = params.text.split(' ');
    
    words.forEach((word, wordIndex) => {
      const wordContainer = document.createElement('span');
      wordContainer.style.display = 'inline-block';
      wordContainer.style.whiteSpace = 'nowrap';
      
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const span = document.createElement('span');
        span.textContent = char;
        // Outline styling
        span.style.color = 'transparent';
        span.style.webkitTextStroke = '1px currentColor';
        span.style.transition = 'none'; // Instant reset by default
        
        spans.push(span);
        wordContainer.appendChild(span);
      }
      
      node.appendChild(wordContainer);
      
      // Add space between words
      if (wordIndex < words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.textContent = '\u00A0'; // non-breaking space
        node.appendChild(spaceSpan);
      }
    });

    if (params.cursor) {
      const cursorSpan = document.createElement('span');
      const colorClass = params.cursorColor === 'accent' ? 'bg-accent shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'bg-primary shadow-[0_0_8px_rgba(57,255,20,0.8)]';
      cursorSpan.className = `inline-block w-[3px] h-[0.9em] ${colorClass} align-middle ml-1.5 animate-pulse`;
      cursorSpan.setAttribute('aria-hidden', 'true');
      node.appendChild(cursorSpan);
    }
  }

  function reset() {
    if (timer) clearTimeout(timer);
    if (interval) clearInterval(interval);
    
    spans.forEach(span => {
      span.style.transition = 'none';
      span.style.color = 'transparent';
      span.style.webkitTextStroke = '1px currentColor';
    });
  }

  function start() {
    reset();
    
    const { speed = 30, delay = 100, onComplete } = params;

    let charIndex = 0;
    timer = setTimeout(() => {
      interval = setInterval(() => {
        if (charIndex < spans.length) {
          const span = spans[charIndex];
          // Fill animation
          span.style.color = 'currentColor';
          span.style.webkitTextStroke = '0';
          charIndex++;
        } else {
          if (interval) clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, speed);
    }, delay);
  }

  setupDOM();

  let observer: IntersectionObserver;

  if (typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            start();
          } else {
            reset();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
  } else {
    start();
  }

  return {
    destroy() {
      if (observer) observer.disconnect();
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
    }
  };
}
