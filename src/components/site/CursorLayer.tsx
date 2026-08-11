import { useEffect, useRef, useState } from "react";

/** Desktop-only custom cursor. Never mounts on coarse pointers. */
export function CursorLayer() {
  const dot = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!mq.matches || reduced) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = (e.target as HTMLElement)?.closest?.("[data-magnetic]") as HTMLElement | null;
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        if (el !== t) el.style.transform = "";
      });
      if (t) {
        const r = t.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.3;
        t.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${cx - 14}px, ${cy - 14}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={dot}
      aria-hidden
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[70] h-7 w-7 rounded-full border border-brass/70 mix-blend-difference"
    />
  );
}
