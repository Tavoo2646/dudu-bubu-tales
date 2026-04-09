import { motion } from "framer-motion";

const heartEmojis = ["❤️", "💕", "💖", "💗", "💓", "💝", "💘", "💞", "🩷", "🤎", "🩵", "💜"];

const FloatingHearts = ({ count = 10 }: { count?: number }) => {
  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 5,
    size: Math.random() * 10 + 14,
    emoji: heartEmojis[i % heartEmojis.length],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute"
          style={{ left: `${h.x}%`, bottom: -30, fontSize: h.size }}
          animate={{
            y: [0, -window.innerHeight * 0.5, -window.innerHeight - 50],
            opacity: [0, 0.5, 0.35, 0],
            x: [0, Math.sin(h.id) * 20, Math.cos(h.id) * -15, 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          {h.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
