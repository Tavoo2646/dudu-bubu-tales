import { motion } from "framer-motion";

const FloatingHearts = ({ count = 12 }: { count?: number }) => {
  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 3,
    size: Math.random() * 16 + 12,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-cinema-rose"
          style={{ left: `${h.x}%`, bottom: -20, fontSize: h.size }}
          animate={{
            y: [0, -window.innerHeight - 50],
            opacity: [0, 0.8, 0.6, 0],
            x: [0, Math.sin(h.id) * 30, Math.cos(h.id) * -20, 0],
            rotate: [0, 15, -10, 5],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
