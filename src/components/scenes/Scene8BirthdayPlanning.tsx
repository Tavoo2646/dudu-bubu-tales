import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import SceneImage from "../cinema/SceneImage";
import scene8 from "../../assets/scene8-planning.jpg";

const Scene8BirthdayPlanning = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-deep via-cinema-night to-cinema-deep" />

      {/* Theater curtains */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-cinema-rose/20 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-cinema-rose/20 to-transparent" />

      {/* Spotlight */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[500px] bg-cinema-gold/5 rounded-b-full"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <SceneImage
        src={scene8}
        alt="Secret birthday planning in the theater"
        className="w-72 h-72 md:w-96 md:h-96 z-20"
        delay={0.5}
        animate="breathe"
      />

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="A secret plan was brewing... for someone special." delay={1.5} />
      </div>
    </div>
  );
};

export default Scene8BirthdayPlanning;
