import { motion } from "framer-motion";
import CinemaGif from "../cinema/CinemaGif";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import RainEffect from "../cinema/RainEffect";
import { gifMap } from "../../data/gifMap";

const Scene7DeepLove = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Sunset background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-sunset/30 via-cinema-rose/15 to-cinema-deep" />

      {/* Sun */}
      <motion.div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(35 80% 60% / 0.6) 0%, transparent 70%)",
        }}
        animate={{ y: [0, 10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <RainEffect intensity={15} />

      <div className="relative z-20 flex items-center gap-6 md:gap-12">
        <CinemaGif src={gifMap.holdingHands.url} alt={gifMap.holdingHands.alt} delay={0.5} size="lg" />
        <CinemaGif src={gifMap.comfortHug.url} alt={gifMap.comfortHug.alt} delay={1.5} size="md" />
      </div>

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="In the rain or shine, you were always my shelter..." delay={2} />
      </div>
    </div>
  );
};

export default Scene7DeepLove;
