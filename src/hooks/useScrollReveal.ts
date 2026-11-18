import { useEffect } from 'react';

/**
 * Mengaktifkan animasi kemunculan skrol menggunakan IntersectionObserver
 * pada elemen dengan kelas .reveal, .reveal-left, dan .reveal-right.
 */
export function useScrollReveal(dependencyKey?: string) {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right')
    );

    if (targets.length === 0) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -32px 0px',
      }
    );

    targets.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [dependencyKey]);
}
