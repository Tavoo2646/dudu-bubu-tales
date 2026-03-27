import { motion } from "framer-motion";
import CinemaGif from "../cinema/CinemaGif";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import Confetti from "../cinema/Confetti";
import { gifMap } from "../../data/gifMap";

const Scene9BirthdayClimax = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-gold/10 via-cinema-rose/10 to-cinema-deep" />

      <Confetti count={40} />

      {/* Spotlight beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-[150px] h-[400px] bg-cinema-gold/5 rotate-12"
        style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)" }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-[150px] h-[400px] bg-cinema-rose/5 -rotate-12"
        style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />

      <div className="relative z-20 flex flex-col items-center gap-6">
        <CinemaGif src={gifMap.cakeCutting.url} alt={gifMap.cakeCutting.alt} delay={0.3} size="lg" />
        
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <CinemaGif src={gifMap.celebration.url} alt={gifMap.celebration.alt} delay={2} size="sm" />
        </motion.div>
      </div>

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle 
          text="Happy Birthday to the person who became my home." 
          delay={2.5} 
        />
      </div>

      {/* Cake emoji floating */}
      <motion.div
        className="absolute top-20 right-20 text-5xl"
        animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎂
      </motion.div>
    </div>
  );
};

export default Scene9BirthdayClimax;
