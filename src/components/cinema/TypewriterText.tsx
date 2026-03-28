import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
}

const TypewriterText = ({ text, delay = 0, className = "", speed = 0.04 }: TypewriterTextProps) => {
  const words = text.split(" ");

  return (
    <motion.div
      className={`font-body text-cinema-cream/80 leading-relaxed ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: delay + i * speed * 3, duration: 0.4, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypewriterText;
