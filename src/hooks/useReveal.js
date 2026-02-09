// src/hooks/useReveal.js
import { useEffect } from "react";

export default function useReveal(selector = ".reveal") {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;

    // Assign global stagger
    els.forEach((el, i) => {
      el.style.setProperty("--d", `${i * 120}ms`);
    });

    // Fallback: reveal all if no observer
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
