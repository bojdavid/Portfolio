/**
 * Scroll Reveal Action for Svelte
 * Replaces `in:fly` to support continuous replay on scroll-in and instant reset on scroll-out.
 */

export interface RevealParams {
  x?: number;
  y?: number;
  duration?: number;
  delay?: number;
  opacity?: number;
  threshold?: number;
}

export function reveal(node: HTMLElement, params: RevealParams = {}) {
  let currentParams = params;
  
  function applyInitialState() {
    const { x = 0, y = 0, opacity = 0 } = currentParams;
    node.style.transition = 'none';
    node.style.opacity = String(opacity);
    
    const transforms = [];
    if (x) transforms.push(`translateX(${x}px)`);
    if (y) transforms.push(`translateY(${y}px)`);
    
    node.style.transform = transforms.length > 0 ? transforms.join(' ') : 'none';
  }

  function applyRevealedState() {
    const { duration = 400, delay = 0 } = currentParams;
    
    // Force a reflow so the transition applies from the initial state
    void node.offsetHeight;
    
    node.style.transition = `all ${duration}ms cubic-bezier(0, 0, 0.2, 1) ${delay}ms`;
    node.style.opacity = '1';
    node.style.transform = 'translate(0, 0)';
  }

  // Set initial state immediately to avoid flash of content
  applyInitialState();

  let observer: IntersectionObserver;

  function initObserver() {
    if (typeof IntersectionObserver !== 'undefined') {
      const threshold = currentParams.threshold ?? 0.1;
      
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              applyRevealedState();
            } else {
              applyInitialState();
            }
          });
        },
        // We use rootMargin to slightly expand the trigger zone so it resets exactly when it leaves
        { threshold: 0 } 
      );
      observer.observe(node);
    } else {
      // Fallback
      applyRevealedState();
    }
  }

  initObserver();

  return {
    update(newParams: RevealParams) {
      currentParams = newParams;
      if (observer) {
        observer.disconnect();
        initObserver();
      }
    },
    destroy() {
      if (observer) {
        observer.disconnect();
      }
    }
  };
}
