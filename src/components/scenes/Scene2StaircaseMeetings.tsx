import { motion } from "framer-motion";
import SceneImage from "../cinema/SceneImage";
import NarrationText from "../cinema/NarrationText";
import scene2 from "../../assets/scene2-staircase.jpg";

const Scene2StaircaseMeetings = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-warm via-secondary to-cinema-night" />

      {/* Warm ambient bokeh - subtle */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cinema-gold/8"
          style={{
            width: Math.random() * 80 + 40,
            height: Math.random() * 80 + 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: Math.random() * 5 + 4, repeat: Infinity }}
        />
      ))}

      <SceneImage
        src={scene2}
        alt="Meeting on the staircase"
        className="w-56 h-56 md:w-72 md:h-72 z-20"
        delay={0.5}
      />

      <div className="relative z-30 mt-6 px-8 max-w-md">
        <NarrationText
          lines={[
            "Small talks…",
            "Small touches…",
            "Small hugs…",
            "And without telling… you became important.",
          ]}
          startDelay={2}
          lineGap={1.8}
        />
      </div>

      <motion.div
        className="relative z-30 mt-5 px-8 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 10, duration: 1.5 }}
      >
        <p className="text-xs md:text-sm font-display italic text-cinema-cream/50 text-center cinema-subtitle">
          "Maybe love doesn't come loudly…"
        </p>
        <p className="text-xs md:text-sm font-display italic text-cinema-cream/50 text-center cinema-subtitle mt-2">
          "Maybe it comes quietly… like you came into my life."
        </p>
      </motion.div>
    </div>
  );
};

export default Scene2StaircaseMeetings;
