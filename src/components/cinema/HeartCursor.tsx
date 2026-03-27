import { useEffect, useCallback, useRef } from "react";

const HeartCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createHeart = useCallback((x: number, y: number) => {
    if (!containerRef.current) return;
    const heart = document.createElement("div");
    heart.className = "heart-particle";
    heart.innerHTML = "💖";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${Math.random() * 12 + 10}px`;
    containerRef.current.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }, []);

  useEffect(() => {
    let throttle = 0;
    const handler = (e: MouseEvent) => {
      const now = Date.now();
      if (now - throttle < 80) return;
      throttle = now;
      createHeart(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [createHeart]);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default HeartCursor;
