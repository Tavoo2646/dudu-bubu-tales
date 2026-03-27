import { motion } from "framer-motion";
import CinemaGif from "../cinema/CinemaGif";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import { gifMap } from "../../data/gifMap";

const Scene2StaircaseMeetings = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Staircase background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-warm via-secondary to-cinema-night" />
      
      {/* Stairs visual */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 md:w-96">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-muted/15 border-t border-cinema-cream/10"
            style={{
              height: 20,
              width: `${100 - i * 8}%`,
              marginLeft: `${i * 4}%`,
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Characters */}
      <div className="relative z-20 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6 md:gap-12">
          <CinemaGif src={gifMap.shyInteraction.url} alt={gifMap.shyInteraction.alt} delay={0.3} size="lg" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <CinemaGif src={gifMap.hug.url} alt={gifMap.hug.alt} delay={2.5} size="md" />
        </motion.div>
      </div>

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="We didn't plan it... but it kept happening..." delay={1.5} />
      </div>
    </div>
  );
};

export default Scene2StaircaseMeetings;
