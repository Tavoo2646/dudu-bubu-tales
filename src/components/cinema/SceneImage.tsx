import { motion } from "framer-motion";

interface SceneImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

const SceneImage = ({ src, alt, className = "", delay = 0 }: SceneImageProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
    >
      {/* Soft ambient glow */}
      <div className="absolute inset-0 rounded-3xl bg-cinema-rose/15 blur-3xl scale-125" />

      <motion.img
        src={src}
        alt={alt}
        className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
        animate={{
          scale: [1, 1.015, 1],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        loading="eager"
      />

      {/* Cinematic vignette */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/50 via-transparent to-background/20 pointer-events-none" />
    </motion.div>
  );
};

export default SceneImage;
