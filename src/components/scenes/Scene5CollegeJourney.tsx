import { motion } from "framer-motion";
import CinemaGif from "../cinema/CinemaGif";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import Fireflies from "../cinema/Fireflies";
import { gifMap } from "../../data/gifMap";

const Scene5CollegeJourney = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Sunny gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-gold/10 via-cinema-warm to-secondary" />
      
      {/* Street / College bg elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-muted/10" />
      <div className="absolute bottom-32 left-8 w-3 h-24 bg-muted/20 rounded-t" /> {/* lamp post */}
      <div className="absolute bottom-32 right-12 w-40 h-20 bg-muted/15 rounded-t-lg" /> {/* bus stop */}
      <motion.div
        className="absolute bottom-28 right-14 text-xs font-body text-cinema-cream/30"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🚌 Bus Stop
      </motion.div>

      <Fireflies count={10} />

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <CinemaGif src={gifMap.walkingTogether.url} alt={gifMap.walkingTogether.alt} delay={0.3} size="md" />
        <CinemaGif src={gifMap.iceCream.url} alt={gifMap.iceCream.alt} delay={1} size="sm" />
        <CinemaGif src={gifMap.eating.url} alt={gifMap.eating.alt} delay={1.8} size="sm" />
      </div>

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="College roads, ice cream dates, and endless walks..." delay={2} />
      </div>
    </div>
  );
};

export default Scene5CollegeJourney;
