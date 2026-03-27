import { motion } from "framer-motion";

interface LoveMeterProps {
  progress: number; // 0 to 1
}

const LoveMeter = ({ progress }: LoveMeterProps) => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
      <span className="text-xs font-body text-cinema-cream/60 tracking-widest uppercase">Love</span>
      <div className="w-2 h-40 bg-muted/30 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-cinema-rose to-cinema-gold"
          animate={{ height: `${progress * 100}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <motion.span
        className="text-lg"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        💕
      </motion.span>
    </div>
  );
};

export default LoveMeter;
