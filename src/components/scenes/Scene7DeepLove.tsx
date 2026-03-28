import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import RainEffect from "../cinema/RainEffect";
import SparkleOverlay from "../cinema/SparkleOverlay";
import SceneImage from "../cinema/SceneImage";
import TypewriterText from "../cinema/TypewriterText";
import scene7 from "../../assets/scene7-deep-love.jpg";

const Scene7DeepLove = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-sunset/30 via-cinema-rose/15 to-cinema-deep" />

      <RainEffect intensity={15} />
      <SparkleOverlay count={10} color="cinema-sunset" />

      {/* Sunset glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-cinema-sunset/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <SceneImage
        src={scene7}
        alt="Holding hands in the rain at sunset"
        className="w-72 h-56 md:w-96 md:h-72 z-20"
        delay={0.5}
        animate="glow"
      />

      <div className="relative z-30 mt-6 px-6 max-w-md">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
          <TypewriterText
            text="You held my hand through every storm, and turned every raindrop into a reason to smile. In your arms, even the darkest days feel bright."
            delay={3}
            className="text-sm md:text-base text-center text-cinema-cream/70"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-12 z-30 px-8">
        <CinemaSubtitle text="In the rain or shine, you were always my shelter..." delay={2} />
      </div>
    </div>
  );
};

export default Scene7DeepLove;
