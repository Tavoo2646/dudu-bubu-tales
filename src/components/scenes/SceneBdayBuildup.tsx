import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "../cinema/FloatingHearts";

const SceneBdayBuildup = () => {
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setCountdown(3), 10000);
    const t2 = setTimeout(() => setCountdown(2), 11500);
    const t3 = setTimeout(() => setCountdown(1), 13000);
    const t4 = setTimeout(() => setCountdown(0), 14500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Dark cinematic bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cinema-deep to-background" />

      {/* Spotlight */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[600px] bg-gradient-radial from-cinema-cream/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Heartbeat pulse ring */}
      <motion.div
        className="absolute z-10 w-40 h-40 rounded-full border border-cinema-rose/20"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute z-10 w-56 h-56 rounded-full border border-cinema-rose/10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
      />

      <FloatingHearts count={12} />

      {/* Emotional text */}
      <div className="relative z-30 flex flex-col items-center gap-4 px-8 max-w-lg">
        <motion.p
          className="text-base md:text-xl font-display italic text-cinema-cream/80 text-center cinema-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Today is not just your birthday…
        </motion.p>

        <motion.p
          className="text-lg md:text-2xl font-display italic text-cinema-cream/90 text-center cinema-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1.5 }}
        >
          It is the day my favorite person was born…
        </motion.p>

        <motion.p
          className="text-sm md:text-base font-display italic text-cinema-cream/50 text-center cinema-subtitle mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6, duration: 1.5 }}
        >
          The person who changed every meaning of love for me.
        </motion.p>

        <motion.p
          className="text-sm md:text-base font-display italic text-cinema-gold/60 text-center cinema-subtitle mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8, duration: 1.5 }}
        >
          Get ready…
        </motion.p>
      </div>

      {/* Countdown */}
      <AnimatePresence mode="wait">
        {countdown !== null && countdown > 0 && (
          <motion.div
            key={countdown}
            className="absolute z-40 flex items-center justify-center"
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-6xl md:text-8xl font-display text-cinema-gold/80 cinema-subtitle">
              {countdown}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SceneBdayBuildup;
