import { motion } from "framer-motion";
import CinemaGif from "../cinema/CinemaGif";
import FloatingHearts from "../cinema/FloatingHearts";
import Fireflies from "../cinema/Fireflies";
import { gifMap } from "../../data/gifMap";

const Scene10Finale = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-rose/15 via-cinema-deep to-background" />

      <FloatingHearts count={20} />
      <Fireflies count={15} />

      <div className="relative z-20 flex flex-col items-center gap-6">
        <CinemaGif src={gifMap.foreverTogether.url} alt={gifMap.foreverTogether.alt} delay={0.5} size="lg" />

        <motion.h2
          className="text-3xl md:text-5xl font-display italic text-cinema-gold cinema-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          Our story continues...
        </motion.h2>

        <motion.p
          className="text-sm font-body text-cinema-cream/50 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          ∞ Forever & Always ∞
        </motion.p>
      </div>

      {/* Credits scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        <div className="credits-scroll text-center">
          <p className="text-xs font-body text-cinema-cream/30 mb-2">A Love Story Film</p>
          <p className="text-xs font-body text-cinema-cream/20 mb-1">Starring: Dudu & Bubu</p>
          <p className="text-xs font-body text-cinema-cream/20 mb-1">Directed by: Hearts</p>
          <p className="text-xs font-body text-cinema-cream/20 mb-1">Music: Love in the Air</p>
          <p className="text-xs font-body text-cinema-cream/15 mt-4">Made with 💕</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Scene10Finale;
