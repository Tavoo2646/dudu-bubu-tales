import { motion } from "framer-motion";
import CinemaGif from "../cinema/CinemaGif";
import { gifMap } from "../../data/gifMap";

const memories = [
  { gif: gifMap.movieWatching, label: "Movie Nights 🎬" },
  { gif: gifMap.tripHappiness, label: "Adventures 🌍" },
  { gif: gifMap.parkSitting, label: "Park Days 🌳" },
  { gif: gifMap.festival, label: "Festivals 🎉" },
];

const Scene6Memories = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-night via-cinema-warm to-cinema-deep" />

      {/* Film reel title */}
      <motion.h2
        className="relative z-20 text-2xl md:text-4xl font-display text-cinema-gold/80 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ✨ Our Memories ✨
      </motion.h2>

      {/* Film reel cards sliding */}
      <div className="relative z-20 flex gap-6 overflow-hidden px-4">
        {memories.map((m, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 flex flex-col items-center gap-3 bg-card/30 backdrop-blur-sm p-4 rounded-2xl border border-cinema-rose/10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <CinemaGif src={m.gif.url} alt={m.gif.alt} size="sm" delay={i * 0.6} />
            <span className="text-sm font-body text-cinema-cream/70">{m.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Film strip borders */}
      <div className="absolute top-8 left-0 right-0 h-6 flex gap-2 px-2 z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex-1 h-full bg-muted/10 rounded-sm" />
        ))}
      </div>
      <div className="absolute bottom-8 left-0 right-0 h-6 flex gap-2 px-2 z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex-1 h-full bg-muted/10 rounded-sm" />
        ))}
      </div>
    </div>
  );
};

export default Scene6Memories;
