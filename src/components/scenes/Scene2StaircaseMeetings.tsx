import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import SparkleOverlay from "../cinema/SparkleOverlay";
import SceneImage from "../cinema/SceneImage";
import WishCard from "../cinema/WishCard";
import scene2 from "../../assets/scene2-staircase.jpg";

const Scene2StaircaseMeetings = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-warm via-secondary to-cinema-night" />

      {/* Warm bokeh particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cinema-gold/15"
          style={{
            width: Math.random() * 60 + 20,
            height: Math.random() * 60 + 20,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <SparkleOverlay count={8} color="cinema-blush" />

      <SceneImage
        src={scene2}
        alt="Shy meeting on the staircase"
        className="w-64 h-64 md:w-80 md:h-80 z-20"
        delay={0.3}
        animate="breathe"
      />

      {/* Heartbeat line */}
      <motion.div className="absolute top-1/4 left-0 right-0 z-10 flex items-center justify-center">
        <svg width="300" height="40" viewBox="0 0 300 40" className="opacity-20">
          <motion.path
            d="M0,20 L80,20 L100,5 L120,35 L140,10 L160,30 L180,20 L300,20"
            fill="none"
            stroke="hsl(var(--cinema-rose))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <div className="absolute bottom-32 z-30 px-6">
        <WishCard
          wish="Every accidental meeting on those stairs felt like the universe was conspiring to bring us together. 🌙"
          delay={3.5}
          variant="rose"
        />
      </div>

      <div className="absolute bottom-12 z-30 px-8">
        <CinemaSubtitle text="We didn't plan it… but it kept happening…" delay={1.5} />
      </div>
    </div>
  );
};

export default Scene2StaircaseMeetings;
