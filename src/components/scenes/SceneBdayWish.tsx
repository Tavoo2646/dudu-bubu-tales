import { useState } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "../cinema/FloatingHearts";
import Confetti from "../cinema/Confetti";
import CinemaGif from "../cinema/CinemaGif";
import { gifMap } from "../../data/gifMap";

const candles = [0, 1, 2, 3, 4];

const SceneBdayWish = () => {
  const [blownCandles, setBlownCandles] = useState<Set<number>>(new Set());
  const allBlown = blownCandles.size === candles.length;

  const blowCandle = (id: number) => {
    setBlownCandles((prev) => new Set(prev).add(id));
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Theater dark bg with warm spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-deep via-background to-cinema-deep" />

      {/* Spotlight turning on */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[700px] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <div className="w-full h-full bg-gradient-radial from-cinema-gold/8 via-cinema-rose/3 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <FloatingHearts count={10} />

      {/* Rose petals CSS */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute text-cinema-rose/30"
            style={{ left: `${Math.random() * 100}%`, top: -20, fontSize: 14 + Math.random() * 8 }}
            animate={{
              y: [0, window.innerHeight + 40],
              x: [0, Math.sin(i) * 60],
              rotate: [0, 360],
              opacity: [0.6, 0],
            }}
            transition={{ duration: 4 + Math.random() * 3, delay: 2 + Math.random() * 6, repeat: Infinity }}
          >
            🌹
          </motion.div>
        ))}
      </div>

      {allBlown && <Confetti count={35} />}

      {/* Fireworks after blowing */}
      {allBlown && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`fw-${i}`}
              className="absolute text-xl"
              style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 50}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
              transition={{ delay: i * 0.3, duration: 1.2, repeat: 2 }}
            >
              {["✨", "🎆", "🎇", "💫", "⭐"][i % 5]}
            </motion.div>
          ))}
        </div>
      )}

      {/* GIF character with glow */}
      <motion.div
        className="relative z-30 mb-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <div className="absolute inset-0 rounded-3xl bg-cinema-gold/10 blur-3xl scale-150" />
        <CinemaGif gifKey="cakeSurprise" className="w-44 h-44 md:w-56 md:h-56 rounded-3xl" />
      </motion.div>

      {/* Interactive candles */}
      <motion.div
        className="relative z-30 flex gap-3 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        {candles.map((id) => (
          <button
            key={id}
            onClick={() => blowCandle(id)}
            className="flex flex-col items-center cursor-pointer group transition-transform hover:scale-110"
          >
            <motion.span
              className="text-2xl"
              animate={
                blownCandles.has(id)
                  ? { opacity: 0.3, scale: 0.8 }
                  : { opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }
              }
              transition={blownCandles.has(id) ? {} : { duration: 0.8, repeat: Infinity }}
            >
              {blownCandles.has(id) ? "💨" : "🕯️"}
            </motion.span>
            {!blownCandles.has(id) && (
              <span className="text-[8px] text-cinema-cream/30 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                tap
              </span>
            )}
          </button>
        ))}
      </motion.div>

      {allBlown && (
        <motion.p
          className="relative z-30 text-xs text-cinema-gold/60 font-body mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🎉 You blew all the candles!
        </motion.p>
      )}

      {/* Emotional text */}
      <div className="relative z-30 flex flex-col items-center gap-3 px-8 max-w-lg">
        <motion.p
          className="text-base md:text-xl font-display italic text-cinema-gold/90 text-center cinema-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1.5 }}
          style={{ animation: "breathing 3s ease-in-out infinite" }}
        >
          "Happy Birthday to the boy who became my peace."
        </motion.p>

        <motion.p
          className="text-sm md:text-lg font-display italic text-cinema-cream/70 text-center cinema-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 7.5, duration: 1.5 }}
        >
          "You didn't just enter my life…"
        </motion.p>

        <motion.p
          className="text-sm md:text-lg font-display italic text-cinema-cream/80 text-center cinema-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9.5, duration: 1.5 }}
        >
          "You changed how my heart feels."
        </motion.p>
      </div>
    </div>
  );
};

export default SceneBdayWish;
