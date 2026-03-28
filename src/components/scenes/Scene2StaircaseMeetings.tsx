import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import SceneImage from "../cinema/SceneImage";
import scene2 from "../../assets/scene2-staircase.jpg";

const Scene2StaircaseMeetings = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-warm via-secondary to-cinema-night" />

      {/* Warm bokeh particles */}
      {Array.from({ length: 12 }).map((_, i) => (
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

      <SceneImage
        src={scene2}
        alt="Shy meeting on the staircase"
        className="w-72 h-72 md:w-[400px] md:h-[400px] z-20"
        delay={0.3}
        animate="breathe"
      />

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="We didn't plan it… but it kept happening…" delay={1.5} />
      </div>
    </div>
  );
};

export default Scene2StaircaseMeetings;
