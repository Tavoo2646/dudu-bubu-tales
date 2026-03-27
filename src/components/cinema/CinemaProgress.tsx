import { motion } from "framer-motion";

interface CinemaProgressProps {
  current: number;
  total: number;
  sceneTitle: string;
  dayCount: number;
}

const CinemaProgress = ({ current, total, sceneTitle, dayCount }: CinemaProgressProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-4 pt-8 bg-gradient-to-t from-background/90 to-transparent">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-body text-cinema-cream/50 tracking-wider uppercase">
          Scene {current + 1} of {total}
        </span>
        <span className="text-xs font-body text-cinema-gold/70 italic">
          {sceneTitle}
        </span>
        <span className="text-xs font-body text-cinema-cream/50">
          Day {dayCount} 💫
        </span>
      </div>
      <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cinema-rose to-cinema-gold progress-glow"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default CinemaProgress;
