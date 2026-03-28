import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import RainEffect from "../cinema/RainEffect";
import SceneImage from "../cinema/SceneImage";
import scene7 from "../../assets/scene7-deep-love.jpg";

const Scene7DeepLove = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-sunset/30 via-cinema-rose/15 to-cinema-deep" />

      <RainEffect intensity={15} />

      <SceneImage
        src={scene7}
        alt="Holding hands in the rain at sunset"
        className="w-80 h-64 md:w-[480px] md:h-[360px] z-20"
        delay={0.5}
        animate="glow"
      />

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="In the rain or shine, you were always my shelter..." delay={2} />
      </div>
    </div>
  );
};

export default Scene7DeepLove;
