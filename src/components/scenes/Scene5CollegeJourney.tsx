import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import Fireflies from "../cinema/Fireflies";
import SceneImage from "../cinema/SceneImage";
import scene5 from "../../assets/scene5-college.jpg";

const Scene5CollegeJourney = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-gold/10 via-cinema-warm to-secondary" />

      {/* Falling autumn leaves */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lg"
          style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
          animate={{ y: ["0vh", "105vh"], x: [0, Math.random() * 40 - 20], rotate: [0, 360] }}
          transition={{ duration: Math.random() * 8 + 6, repeat: Infinity, delay: Math.random() * 5, ease: "linear" }}
        >
          🍂
        </motion.div>
      ))}

      <Fireflies count={10} />

      <SceneImage
        src={scene5}
        alt="College journey together"
        className="w-80 h-64 md:w-[480px] md:h-[360px] z-20"
        delay={0.3}
        animate="float"
      />

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="College roads, ice cream dates, and endless walks..." delay={2} />
      </div>
    </div>
  );
};

export default Scene5CollegeJourney;
