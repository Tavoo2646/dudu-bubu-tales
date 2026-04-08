import { motion } from "framer-motion";
import FloatingHearts from "../cinema/FloatingHearts";
import scene10 from "../../assets/scene10-finale.jpg";
import SceneImage from "../cinema/SceneImage";
import NarrationText from "../cinema/NarrationText";

const Scene10Finale = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-rose/8 via-cinema-deep to-background" />

      <FloatingHearts count={8} />

      {/* Emotional opening */}
      <div className="relative z-30 mb-4 px-8 max-w-md">
        <NarrationText
          lines={[
            "Thank you for coming into my life.",
            "Thank you for staying.",
            "Thank you for loving me.",
          ]}
          startDelay={0.5}
          lineGap={2.2}
        />
      </div>

      <SceneImage
        src={scene10}
        alt="Forever together"
        className="w-52 h-52 md:w-68 md:h-68 z-20"
        delay={6}
      />

      {/* Birthday final message */}
      <motion.p
        className="relative z-30 mt-5 text-xl md:text-3xl font-display italic text-cinema-gold cinema-subtitle"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 8, duration: 2 }}
      >
        Happy Birthday My Love ❤️
      </motion.p>

      <motion.div
        className="relative z-30 mt-3 px-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 11, duration: 1.5 }}
      >
        <p className="text-xs md:text-sm font-display italic text-cinema-cream/50 text-center cinema-subtitle">
          "Out of all days in my life…"
        </p>
        <p className="text-xs md:text-sm font-display italic text-cinema-cream/60 text-center cinema-subtitle mt-1.5">
          "The best day was the day you were born."
        </p>
      </motion.div>

      {/* Future together */}
      <motion.div
        className="relative z-30 mt-4 px-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 14, duration: 1.5 }}
      >
        <NarrationText
          lines={[
            "Next birthdays… Next successes… Next dreams…",
            "I want all of them with you.",
          ]}
          startDelay={14}
          lineGap={2}
        />
      </motion.div>

      {/* Movie credits */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 18 }}
      >
        <div className="credits-scroll text-center pb-16">
          <p className="text-sm font-display italic text-cinema-cream/40 mb-6">🎬 Our Story</p>

          <p className="text-[10px] font-body text-cinema-cream/25 uppercase tracking-widest mb-1">Hero</p>
          <p className="text-sm font-display italic text-cinema-cream/50 mb-4">Him ❤️</p>

          <p className="text-[10px] font-body text-cinema-cream/25 uppercase tracking-widest mb-1">Heroine</p>
          <p className="text-sm font-display italic text-cinema-cream/50 mb-4">Her ❤️</p>

          <p className="text-[10px] font-body text-cinema-cream/25 uppercase tracking-widest mb-1">Story Writer</p>
          <p className="text-sm font-display italic text-cinema-cream/50 mb-4">Her Heart</p>

          <p className="text-[10px] font-body text-cinema-cream/25 uppercase tracking-widest mb-1">Music</p>
          <p className="text-sm font-display italic text-cinema-cream/50 mb-4">Our Calls & Memories</p>

          <p className="text-[10px] font-body text-cinema-cream/25 uppercase tracking-widest mb-1">Special Date</p>
          <p className="text-sm font-display italic text-cinema-gold/60 mb-4">January 9 ❤️</p>

          <p className="text-[10px] font-body text-cinema-cream/25 uppercase tracking-widest mb-1">Status</p>
          <p className="text-sm font-display italic text-cinema-cream/50 mb-6">Still Together…</p>

          <p className="text-[10px] font-body text-cinema-cream/25 uppercase tracking-widest mb-1">Next Chapter</p>
          <p className="text-sm font-display italic text-cinema-cream/50 mb-8">Loading…</p>

          <p className="text-base font-display italic text-cinema-cream/60 mb-2">
            "Our story is not finished…"
          </p>
          <p className="text-lg font-display italic text-cinema-cream/70">
            "This is just Interval."
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Scene10Finale;
