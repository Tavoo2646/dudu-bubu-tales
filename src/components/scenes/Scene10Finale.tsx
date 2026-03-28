import { motion } from "framer-motion";
import FloatingHearts from "../cinema/FloatingHearts";
import Fireflies from "../cinema/Fireflies";
import SparkleOverlay from "../cinema/SparkleOverlay";
import SceneImage from "../cinema/SceneImage";
import TypewriterText from "../cinema/TypewriterText";
import scene10 from "../../assets/scene10-finale.jpg";

const Scene10Finale = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-rose/15 via-cinema-deep to-background" />

      <FloatingHearts count={25} />
      <Fireflies count={18} />
      <SparkleOverlay count={30} color="cinema-gold" />

      <div className="relative z-20 flex flex-col items-center gap-4">
        <SceneImage
          src={scene10}
          alt="Forever together under the stars"
          className="w-64 h-64 md:w-80 md:h-80"
          delay={0.5}
          animate="glow"
        />

        <motion.h2
          className="text-3xl md:text-5xl font-display italic text-cinema-gold cinema-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          Our story continues...
        </motion.h2>

        {/* Final love letter */}
        <motion.div
          className="max-w-md mx-auto px-6 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
        >
          <TypewriterText
            text="You are the reason I believe in forever. Every laugh, every tear, every fight, every hug — they all led us here. To this beautiful, messy, perfect love story. Thank you for being my person. I love you to infinity and beyond. 💕✨"
            delay={4}
            speed={0.03}
            className="text-sm md:text-base text-center text-cinema-cream/70 font-display italic"
          />
        </motion.div>

        <motion.p
          className="text-sm font-body text-cinema-cream/50 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8 }}
        >
          ∞ Forever & Always ∞
        </motion.p>
      </div>

      {/* Credits scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 10 }}
      >
        <div className="credits-scroll text-center">
          <p className="text-xs font-body text-cinema-cream/30 mb-2">A Love Story Film</p>
          <p className="text-xs font-body text-cinema-cream/20 mb-1">Starring: Dudu & Bubu</p>
          <p className="text-xs font-body text-cinema-cream/20 mb-1">Directed by: Hearts</p>
          <p className="text-xs font-body text-cinema-cream/20 mb-1">Music: Inkem Inkem Kaavaale</p>
          <p className="text-xs font-body text-cinema-cream/15 mt-4">Made with 💕</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Scene10Finale;
