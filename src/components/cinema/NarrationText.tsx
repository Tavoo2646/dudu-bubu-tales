import { motion } from "framer-motion";

interface NarrationTextProps {
  lines: string[];
  startDelay?: number;
  lineGap?: number;
  className?: string;
}

const NarrationText = ({ lines, startDelay = 0, lineGap = 1.5, className = "" }: NarrationTextProps) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {lines.map((line, i) => (
        <motion.p
          key={i}
          className="text-sm md:text-lg font-display italic text-cinema-cream/80 text-center cinema-subtitle leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0.85] }}
          transition={{
            delay: startDelay + i * lineGap,
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

export default NarrationText;
