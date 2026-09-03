import { writable } from 'svelte/store';

export interface ToastItem {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'error';
  duration?: number;
}

function createToastStore() {
  const { subscribe, update } = writable<ToastItem[]>([]);

  function show(message: string, type: 'success' | 'info' | 'error' = 'success', duration = 3000) {
    const id = Math.random().toString(36).substring(2, 9);
    const item: ToastItem = { id, message, type, duration };

    update((items) => [...items, item]);

    if (duration > 0) {
      setTimeout(() => {
        dismiss(id);
      }, duration);
    }
    return id;
  }

  function dismiss(id: string) {
    update((items) => items.filter((item) => item.id !== id));
  }

  return {
    subscribe,
    show,
    success: (msg: string, dur?: number) => show(msg, 'success', dur),
    info: (msg: string, dur?: number) => show(msg, 'info', dur),
    error: (msg: string, dur?: number) => show(msg, 'error', dur),
    dismiss
  };
}

export const toast = createToastStore();
