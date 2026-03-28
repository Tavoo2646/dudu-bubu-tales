import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import SparkleOverlay from "../cinema/SparkleOverlay";
import SceneImage from "../cinema/SceneImage";
import WishCard from "../cinema/WishCard";
import scene1 from "../../assets/scene1-first-look.jpg";

const Scene1FirstLook = () => {
  return (
    <motion.div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 8, ease: "easeOut" }}
    >
      {/* Dreamy night sky bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-night via-cinema-warm to-background" />

      {/* Twinkling stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cinema-cream/60 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 40}%` }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <SparkleOverlay count={12} color="cinema-gold" />

      {/* Main illustration */}
      <SceneImage
        src={scene1}
        alt="First look - two souls meeting under moonlight"
        className="w-64 h-64 md:w-80 md:h-80 z-20"
        delay={0.5}
        animate="float"
      />

      {/* Wish */}
      <div className="absolute bottom-32 z-30 px-6">
        <WishCard
          wish="Some glances are so powerful, they rewrite your entire destiny. Ours was one of those. 💫"
          delay={4}
          variant="dreamy"
        />
      </div>

      {/* Subtitle */}
      <div className="absolute bottom-12 z-30 px-8">
        <CinemaSubtitle text="Everything started with a simple look..." delay={2} />
      </div>

      {/* Moon glow */}
      <motion.div
        className="absolute top-12 right-16 w-20 h-20 rounded-full bg-cinema-cream/30"
        style={{ boxShadow: "0 0 80px hsl(35 30% 90% / 0.3)" }}
        animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Shooting star */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-[1px] bg-gradient-to-r from-cinema-cream/80 to-transparent rotate-[35deg]"
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: [0, 200], y: [0, 80], opacity: [0, 1, 0] }}
        transition={{ delay: 3, duration: 1.2, repeat: Infinity, repeatDelay: 8 }}
      />
    </motion.div>
  );
};

export default Scene1FirstLook;
