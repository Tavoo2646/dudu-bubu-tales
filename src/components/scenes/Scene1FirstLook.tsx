import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import SceneImage from "../cinema/SceneImage";
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
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cinema-cream/60 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 40}%` }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      {/* Main illustration */}
      <SceneImage
        src={scene1}
        alt="First look - Dudu walking, Bubu peeking shyly"
        className="w-72 h-72 md:w-96 md:h-96 z-20"
        delay={0.5}
        animate="float"
      />

      {/* Subtitle */}
      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="Everything started with a simple look..." delay={2} />
      </div>

      {/* Moon glow */}
      <motion.div
        className="absolute top-12 right-16 w-20 h-20 rounded-full bg-cinema-cream/30"
        style={{ boxShadow: "0 0 80px hsl(35 30% 90% / 0.3)" }}
        animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Scene1FirstLook;
