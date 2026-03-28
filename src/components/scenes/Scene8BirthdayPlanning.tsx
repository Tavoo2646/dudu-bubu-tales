import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import SparkleOverlay from "../cinema/SparkleOverlay";
import SceneImage from "../cinema/SceneImage";
import WishCard from "../cinema/WishCard";
import scene8 from "../../assets/scene8-planning.jpg";

const Scene8BirthdayPlanning = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-deep via-cinema-night to-cinema-deep" />

      {/* Theater curtains */}
      <motion.div
        className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-cinema-rose/25 to-transparent"
        animate={{ x: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-cinema-rose/25 to-transparent"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <SparkleOverlay count={12} color="cinema-gold" />

      {/* Spotlight */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[500px] bg-cinema-gold/5 rounded-b-full"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Secret planning notes */}
      <motion.div
        className="absolute top-16 left-8 z-20 transform -rotate-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <div className="bg-cinema-gold/10 border border-cinema-gold/20 rounded-lg px-3 py-2 text-[10px] font-body text-cinema-gold/70">
          📝 Plan: Private theater ✓
        </div>
      </motion.div>
      <motion.div
        className="absolute top-28 right-8 z-20 transform rotate-3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, type: "spring" }}
      >
        <div className="bg-cinema-rose/10 border border-cinema-rose/20 rounded-lg px-3 py-2 text-[10px] font-body text-cinema-rose/70">
          🎂 Order special cake ✓
        </div>
      </motion.div>
      <motion.div
        className="absolute top-20 right-24 z-20 transform -rotate-2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, type: "spring" }}
      >
        <div className="bg-cinema-cream/5 border border-cinema-cream/10 rounded-lg px-3 py-2 text-[10px] font-body text-cinema-cream/60">
          💌 Write love letter ✓
        </div>
      </motion.div>

      <SceneImage
        src={scene8}
        alt="Secret birthday planning"
        className="w-64 h-64 md:w-80 md:h-80 z-20"
        delay={0.5}
        animate="breathe"
      />

      <div className="absolute bottom-28 z-30 px-6">
        <WishCard
          wish="Every surprise was planned with so much love because you deserve the entire world and more. 🎁"
          delay={4}
          variant="golden"
        />
      </div>

      <div className="absolute bottom-10 z-30 px-8">
        <CinemaSubtitle text="A secret plan was brewing... for someone special." delay={1.5} />
      </div>
    </div>
  );
};

export default Scene8BirthdayPlanning;
