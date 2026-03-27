import { motion } from "framer-motion";
import CinemaGif from "../cinema/CinemaGif";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import { gifMap } from "../../data/gifMap";

const Scene1FirstLook = () => {
  return (
    <motion.div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 8, ease: "easeOut" }}
    >
      {/* Building background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-night via-cinema-warm to-background" />
      
      {/* Building silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-4">
        <div className="w-20 h-48 md:w-32 md:h-72 bg-muted/20 rounded-t-lg relative">
          <div className="absolute inset-2 grid grid-cols-3 gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-cinema-gold/20 rounded-sm"
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
        <div className="w-24 h-64 md:w-40 md:h-96 bg-muted/25 rounded-t-lg relative">
          <div className="absolute inset-3 grid grid-cols-4 gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-cinema-gold/30 rounded-sm"
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
        <div className="w-16 h-40 md:w-28 md:h-60 bg-muted/15 rounded-t-lg relative">
          <div className="absolute inset-2 grid grid-cols-2 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-cinema-gold/15 rounded-sm"
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Characters */}
      <div className="relative z-20 flex items-end gap-8 md:gap-16 mb-24">
        <CinemaGif src={gifMap.walking.url} alt={gifMap.walking.alt} delay={0.5} size="md" />
        <CinemaGif src={gifMap.shyLook.url} alt={gifMap.shyLook.alt} delay={1.2} size="md" />
      </div>

      {/* Subtitle */}
      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="Everything started with a simple look..." delay={2} />
      </div>

      {/* Moon */}
      <motion.div
        className="absolute top-12 right-16 w-16 h-16 rounded-full bg-cinema-cream/80"
        style={{ boxShadow: "0 0 60px hsl(35 30% 90% / 0.4)" }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Scene1FirstLook;
