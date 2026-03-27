import { motion } from "framer-motion";
import CinemaGif from "../cinema/CinemaGif";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import { gifMap } from "../../data/gifMap";

const Scene8BirthdayPlanning = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Theater dark bg */}
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

      <div className="relative z-20 flex flex-col items-center gap-8">
        <CinemaGif src={gifMap.secretPlanning.url} alt={gifMap.secretPlanning.alt} delay={0.5} size="md" />
        
        <motion.div
          className="text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
        >
          🎂
        </motion.div>

        <CinemaGif src={gifMap.cakeSurprise.url} alt={gifMap.cakeSurprise.alt} delay={2.5} size="md" />
      </div>

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="A secret plan was brewing... for someone special." delay={1.5} />
      </div>
    </div>
  );
};

export default Scene8BirthdayPlanning;
