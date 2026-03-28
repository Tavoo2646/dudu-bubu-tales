import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import FloatingHearts from "../cinema/FloatingHearts";
import SparkleOverlay from "../cinema/SparkleOverlay";
import SceneImage from "../cinema/SceneImage";
import TypewriterText from "../cinema/TypewriterText";
import scene3 from "../../assets/scene3-love-growing.jpg";

const Scene3LoveGrowing = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-deep via-cinema-night to-cinema-warm" />

      {/* Stars */}
      {Array.from({ length: 35 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cinema-cream/60 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 50}%` }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: Math.random() * 3 + 1, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <FloatingHearts count={18} />
      <SparkleOverlay count={15} color="cinema-rose" />

      <SceneImage
        src={scene3}
        alt="Love growing under the stars"
        className="w-64 h-64 md:w-80 md:h-80 z-20"
        delay={0.3}
        animate="glow"
      />

      {/* Late night chat bubbles */}
      <motion.div
        className="absolute top-16 right-8 md:right-16 z-20 flex flex-col gap-2 items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          className="px-3 py-2 rounded-2xl rounded-br-sm bg-cinema-rose/20 border border-cinema-rose/20 text-xs font-body text-cinema-cream/60 max-w-[160px]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.2 }}
        >
          Still awake? 🌙
        </motion.div>
        <motion.div
          className="px-3 py-2 rounded-2xl rounded-bl-sm bg-cinema-gold/15 border border-cinema-gold/15 text-xs font-body text-cinema-cream/60 max-w-[160px] self-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 4 }}
        >
          Can't sleep without talking to you 💕
        </motion.div>
        <motion.div
          className="px-3 py-2 rounded-2xl rounded-br-sm bg-cinema-rose/20 border border-cinema-rose/20 text-xs font-body text-cinema-cream/60 max-w-[160px]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 5 }}
        >
          You're my favorite notification ❤️
        </motion.div>
      </motion.div>

      <div className="absolute bottom-32 z-30 px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6, duration: 1 }}
        >
          <TypewriterText
            text="Those late night conversations became the highlight of every day. In your voice, I found my peace. In your words, I found my home."
            delay={6}
            className="text-sm md:text-base text-center max-w-md mx-auto px-4"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-10 z-30 px-8">
        <CinemaSubtitle text="Every moment together made the heart grow fonder..." delay={2} />
      </div>
    </div>
  );
};

export default Scene3LoveGrowing;
