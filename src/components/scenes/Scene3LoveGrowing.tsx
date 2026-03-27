import { motion } from "framer-motion";
import CinemaGif from "../cinema/CinemaGif";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import FloatingHearts from "../cinema/FloatingHearts";
import { gifMap } from "../../data/gifMap";

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

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-6">
        <CinemaGif src={gifMap.lateNightChat.url} alt={gifMap.lateNightChat.alt} delay={0.3} size="md" />
        <CinemaGif src={gifMap.heartReaction.url} alt={gifMap.heartReaction.alt} delay={1} size="md" />
        <CinemaGif src={gifMap.caring.url} alt={gifMap.caring.alt} delay={1.8} size="sm" />
      </div>

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="Every late night text made the heart grow fonder..." delay={2} />
      </div>
    </div>
  );
};

export default Scene3LoveGrowing;
