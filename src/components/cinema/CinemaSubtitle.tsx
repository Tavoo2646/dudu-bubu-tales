import { motion } from "framer-motion";

interface CinemaSubtitleProps {
  text: string;
  delay?: number;
  className?: string;
}

const CinemaSubtitle = ({ text, delay = 0.5, className = "" }: CinemaSubtitleProps) => {
  return (
    <motion.div
      className={`cinema-subtitle text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      <p className="text-lg md:text-2xl font-display italic text-cinema-cream/90 leading-relaxed">
        "{text}"
      </p>
    </motion.div>
  );
};

export default CinemaSubtitle;
