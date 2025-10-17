import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface RippleGridProps {
  enableRainbow?: boolean;
  gridColor?: string;
  rippleIntensity?: number;
  opacity?: number;
  mouseInteraction?: boolean;
}

const RippleGrid: React.FC<RippleGridProps> = ({
  enableRainbow = false,
  gridColor = "#7E1CFC",
  rippleIntensity = 0.05,
  opacity = 1.0,
  mouseInteraction = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mouseInteraction || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      mousePos.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
      containerRef.current!.style.setProperty("--mx", `${mousePos.current.x}`);
      containerRef.current!.style.setProperty("--my", `${mousePos.current.y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseInteraction]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        "--gridColor": gridColor,
        "--intensity": rippleIntensity,
        "--opacity": opacity,
      } as React.CSSProperties}
    >
      {/* Base animated gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: enableRainbow
            ? `conic-gradient(from 0deg at 50% 50%, #ff00ff, #00ffff, #ffff00, #ff00ff)`
            : `radial-gradient(circle at var(--mx, 0.5) var(--my, 0.5),
                var(--gridColor),
                transparent 70%)`,
          opacity: opacity,
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: enableRainbow ? [0, 360] : [0],
        }}
        transition={{
          duration: enableRainbow ? 15 : 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Moving grid overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--gridColor) 1px, transparent 1px), linear-gradient(90deg, var(--gridColor) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: "0.2",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default RippleGrid;
