import { motion } from "framer-motion";
import SparkleOverlay from "../cinema/SparkleOverlay";
import SceneImage from "../cinema/SceneImage";
import WishCard from "../cinema/WishCard";
import scene6 from "../../assets/scene6-memories.jpg";

const memories = [
  { emoji: "🎬", label: "Movie nights" },
  { emoji: "🌅", label: "Sunset walks" },
  { emoji: "🎡", label: "Festival fun" },
  { emoji: "🌧️", label: "Rainy chai" },
  { emoji: "📸", label: "Silly selfies" },
  { emoji: "🎵", label: "Our songs" },
];

const Scene6Memories = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-night via-cinema-warm to-cinema-deep" />

      <SparkleOverlay count={15} color="cinema-gold" />

      {/* Film reel title */}
      <motion.h2
        className="relative z-20 text-xl md:text-3xl font-display italic text-cinema-gold/80 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ✨ Our Memories ✨
      </motion.h2>

      <SceneImage
        src={scene6}
        alt="Polaroid memories collage"
        className="w-64 h-64 md:w-80 md:h-80 z-20"
        delay={0.5}
        animate="breathe"
      />

      {/* Memory tags floating around */}
      <motion.div
        className="relative z-20 flex flex-wrap justify-center gap-2 mt-4 max-w-md px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        {memories.map((m, i) => (
          <motion.div
            key={i}
            className="px-3 py-1.5 bg-card/30 border border-cinema-cream/10 rounded-full text-xs font-body text-cinema-cream/70 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8 + i * 0.2, type: "spring", stiffness: 200 }}
          >
            {m.emoji} {m.label}
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-20 z-30 px-6">
        <WishCard
          wish="Every tiny moment with you became a treasure I hold close to my heart forever. These memories are my most prized possessions. 🎞️"
          delay={4.5}
          variant="dreamy"
        />
      </div>

      {/* Film strip borders */}
      <div className="absolute top-4 left-0 right-0 h-4 flex gap-1.5 px-2 z-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="flex-1 h-full bg-muted/10 rounded-sm" />
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 h-4 flex gap-1.5 px-2 z-10">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="flex-1 h-full bg-muted/10 rounded-sm" />
        ))}
      </div>
    </div>
  );
};

export default Scene6Memories;
