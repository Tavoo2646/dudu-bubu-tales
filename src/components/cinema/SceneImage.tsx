import { motion } from "framer-motion";

interface SceneImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  animate?: "float" | "breathe" | "glow" | "none";
}

const SceneImage = ({ src, alt, className = "", delay = 0, animate = "breathe" }: SceneImageProps) => {
  const floatAnimation = animate === "float" 
    ? { y: [0, -12, 0] } 
    : animate === "breathe" 
    ? { scale: [1, 1.02, 1] }
    : animate === "glow"
    ? { filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"] }
    : {};

  const floatTransition = animate !== "none" 
    ? { duration: animate === "float" ? 5 : 6, repeat: Infinity, ease: "easeInOut" as const }
    : {};

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
    >
      {/* Glow behind image */}
      <div className="absolute inset-0 rounded-3xl bg-cinema-rose/20 blur-3xl scale-110" />
      
      <motion.img
        src={src}
        alt={alt}
        className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
        animate={floatAnimation}
        transition={floatTransition}
        loading="eager"
      />

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default SceneImage;
