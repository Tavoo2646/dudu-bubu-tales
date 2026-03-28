import { motion } from "framer-motion";
import SceneImage from "../cinema/SceneImage";
import scene6 from "../../assets/scene6-memories.jpg";

const Scene6Memories = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-night via-cinema-warm to-cinema-deep" />

      {/* Film reel title */}
      <motion.h2
        className="relative z-20 text-2xl md:text-4xl font-display italic text-cinema-gold/80 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ✨ Our Memories ✨
      </motion.h2>

      <SceneImage
        src={scene6}
        alt="Polaroid memories collage"
        className="w-80 h-80 md:w-[440px] md:h-[440px] z-20"
        delay={0.5}
        animate="breathe"
      />

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
