import { motion } from "framer-motion";

interface InterludeScreenProps {
  lines: string[];
}

const InterludeScreen = ({ lines }: InterludeScreenProps) => {
  return (
    <div className="absolute inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className="text-base md:text-xl font-display italic text-cinema-cream/70 text-center cinema-subtitle"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 1.8, duration: 1.2, ease: "easeOut" }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default InterludeScreen;
