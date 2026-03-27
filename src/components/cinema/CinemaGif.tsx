import { motion } from "framer-motion";

interface CinemaGifProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "w-28 h-28 md:w-36 md:h-36",
  md: "w-40 h-40 md:w-52 md:h-52",
  lg: "w-52 h-52 md:w-64 md:h-64",
};

const CinemaGif = ({ src, alt, className = "", delay = 0, size = "md" }: CinemaGifProps) => {
  return (
    <motion.div
      className={`relative ${sizes[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <div className="absolute inset-0 rounded-2xl bg-cinema-rose/10 blur-xl" />
      <img
        src={src}
        alt={alt}
        className="relative w-full h-full object-contain rounded-2xl drop-shadow-2xl"
        loading="eager"
      />
    </motion.div>
  );
};

export default CinemaGif;
