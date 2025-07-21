import { useEffect, useRef } from "react";

const Spotlight = () => {
  const spotlightRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;

    const moveSpotlight = (e) => {
      if (spotlight) {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
        spotlight.style.opacity = 1;

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          spotlight.style.opacity = 0;
        }, 1000);
      }
    };

    window.addEventListener("mousemove", moveSpotlight);
    return () => window.removeEventListener("mousemove", moveSpotlight);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl z-50 opacity-0 transition-opacity duration-300"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
};

export default Spotlight;
