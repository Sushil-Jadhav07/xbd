"use client";

import { useEffect, useState, useMemo } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const radius = 20; // px
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollable = Math.max(docHeight - winHeight, 1);
      const ratio = Math.min(Math.max(scrollTop / totalScrollable, 0), 1);
      setProgress(ratio);
      setIsVisible(scrollTop > 200);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      title="Back to top"
      className={
        "fixed bottom-8 right-10 z-50 rounded-full shadow-lg border border-neutral-200/60 dark:border-neutral-800/60 bg-white/80 dark:bg-neutral-900/80 backdrop-blur text-neutral-700 dark:text-neutral-200 transition-all duration-300 " +
        (isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none")
      }
      style={{ width: 56, height: 56 }}
    >
      <div className="relative cursor-pointer flex items-center justify-center w-full h-full">
        <svg width="56" height="56" viewBox="0 0 56 56" className="absolute inset-0">
          {/* Track */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="currentColor"
            className="opacity-20"
            strokeWidth="4"
            fill="none"
          />
          {/* Progress */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
              strokeDasharray: `${circumference}`,
              strokeDashoffset: `${circumference * (1 - progress)}`,
              transition: "stroke-dashoffset 120ms linear",
            }}
          />
        </svg>

        {/* Up Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 5.25a.75.75 0 0 1 .53.22l5 5a.75.75 0 1 1-1.06 1.06L12.75 7.81V18a.75.75 0 0 1-1.5 0V7.81L7.53 11.53a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 .53-.22Z" />
        </svg>
      </div>
    </button>
  );
}


