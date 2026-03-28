import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import FloatingHearts from "../cinema/FloatingHearts";
import SceneImage from "../cinema/SceneImage";
import scene3 from "../../assets/scene3-love-growing.jpg";

const Scene3LoveGrowing = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-deep via-cinema-night to-cinema-warm" />

      {/* Stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cinema-cream/60 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 50}%` }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: Math.random() * 3 + 1, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <FloatingHearts count={15} />

      <SceneImage
        src={scene3}
        alt="Love growing under the stars"
        className="w-72 h-72 md:w-96 md:h-96 z-20"
        delay={0.3}
        animate="glow"
      />

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="Every moment together made the heart grow fonder..." delay={2} />
      </div>
    </div>
  );
};

export default Scene3LoveGrowing;
