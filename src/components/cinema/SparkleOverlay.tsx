import { motion } from "framer-motion";

interface SparkleOverlayProps {
  count?: number;
  color?: string;
}

const SparkleOverlay = ({ count = 20, color = "cinema-gold" }: SparkleOverlayProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-${color}/60`}
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              boxShadow: `0 0 ${size * 3}px hsl(var(--${color}) / 0.4)`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
};

export default SparkleOverlay;
