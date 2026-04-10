import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "../cinema/FloatingHearts";
import SceneImage from "../cinema/SceneImage";
import bdayHeartImg from "../../assets/scene-bday-heart.jpg";
import TypewriterText from "../cinema/TypewriterText";

const heartLines = [
  "You are not just my love…",
  "You are my safe place.",
  "My daily happiness.",
  "My favorite notification.",
  "My calm in every storm.",
  "My best memory.",
  "My home.",
];

const SceneBdayHeart = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  // Reveal lines one by one
  useEffect(() => {
    if (visibleLines < heartLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 2200);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  // Journey counter
  const startDate = new Date("2024-01-09");
  const now = new Date();
  const diffMs = now.getTime() - startDate.getTime();
  const days = Math.floor(diffMs / 86400000);
  const hours = Math.floor((diffMs % 86400000) / 3600000);
  const minutes = Math.floor((diffMs % 3600000) / 60000);

  const promiseDelay = 1.5 + heartLines.length * 2.2;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cinema-deep to-background" />
      <FloatingHearts count={8} />

      {/* Typewriter lines */}
      <div className="relative z-30 flex flex-col items-center gap-2 px-8 max-w-lg mb-4 min-h-[200px] justify-center">
        {heartLines.map((line, i) => (
          <AnimatePresence key={i}>
            {i < visibleLines && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <TypewriterText
                  text={line}
                  className={`text-sm md:text-base text-center cinema-subtitle ${
                    i === heartLines.length - 1
                      ? "!text-cinema-cream/90 !text-lg md:!text-xl"
                      : "!text-cinema-cream/70"
                  }`}
                  speed={0.06}
                />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Promise text */}
      <motion.p
        className="relative z-30 text-base md:text-xl font-display italic text-cinema-gold/90 text-center cinema-subtitle px-8 max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: promiseDelay, duration: 2 }}
        style={{ animation: "breathing 3s ease-in-out infinite" }}
      >
        "And I promise to celebrate you not just today… but in every tomorrow."
      </motion.p>

      {/* Journey counter */}
      <motion.div
        className="relative z-30 mt-5 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: promiseDelay + 2, duration: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-display text-cinema-gold/80">{days}</span>
          <span className="text-[9px] font-body text-cinema-cream/40 uppercase tracking-widest">Days</span>
        </div>
        <span className="text-cinema-cream/20">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-display text-cinema-gold/80">{hours}</span>
          <span className="text-[9px] font-body text-cinema-cream/40 uppercase tracking-widest">Hours</span>
        </div>
        <span className="text-cinema-cream/20">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-display text-cinema-gold/80">{minutes}</span>
          <span className="text-[9px] font-body text-cinema-cream/40 uppercase tracking-widest">Mins</span>
        </div>
      </motion.div>

      <motion.p
        className="relative z-30 text-[9px] font-body text-cinema-cream/30 tracking-widest uppercase mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: promiseDelay + 2.5 }}
      >
        Our Journey Together
      </motion.p>

      {/* Love meter full */}
      <motion.div
        className="relative z-30 mt-4 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: promiseDelay + 3 }}
      >
        <span className="text-[10px] font-body text-cinema-cream/40 uppercase tracking-widest">Love</span>
        <div className="w-24 h-2 bg-muted/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cinema-rose to-cinema-gold"
            initial={{ width: "60%" }}
            animate={{ width: "100%" }}
            transition={{ delay: promiseDelay + 3.5, duration: 2 }}
          />
        </div>
        <motion.span
          className="text-xs text-cinema-gold/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: promiseDelay + 5.5 }}
        >
          100% 💕
        </motion.span>
      </motion.div>

      {/* Generated emotional image */}
      <motion.div
        className="relative z-30 mt-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: promiseDelay + 4, duration: 1.5 }}
      >
        <SceneImage
          src={bdayHeartImg}
          alt="Dudu and Bubu embracing under moonlight"
          className="w-36 h-36 md:w-44 md:h-44"
        />
      </motion.div>
    </div>
  );
};

export default SceneBdayHeart;
