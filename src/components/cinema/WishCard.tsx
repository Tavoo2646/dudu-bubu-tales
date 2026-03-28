import { motion } from "framer-motion";

interface WishCardProps {
  wish: string;
  delay?: number;
  variant?: "default" | "golden" | "rose" | "dreamy";
}

const variants = {
  default: "bg-card/40 border-cinema-cream/10 text-cinema-cream/70",
  golden: "bg-cinema-gold/10 border-cinema-gold/20 text-cinema-gold/90",
  rose: "bg-cinema-rose/10 border-cinema-rose/20 text-cinema-blush/90",
  dreamy: "bg-cinema-night/40 border-cinema-cream/15 text-cinema-cream/80",
};

const WishCard = ({ wish, delay = 3, variant = "default" }: WishCardProps) => {
  return (
    <motion.div
      className={`relative px-6 py-4 rounded-2xl border backdrop-blur-sm max-w-md mx-auto ${variants[variant]}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 1, ease: "easeOut" }}
    >
      {/* Decorative corner sparkles */}
      <span className="absolute -top-1 -left-1 text-xs opacity-60">✦</span>
      <span className="absolute -top-1 -right-1 text-xs opacity-60">✦</span>
      <span className="absolute -bottom-1 -left-1 text-xs opacity-60">✦</span>
      <span className="absolute -bottom-1 -right-1 text-xs opacity-60">✦</span>

      <p className="text-sm md:text-base font-display italic leading-relaxed text-center">
        {wish}
      </p>
    </motion.div>
  );
};

export default WishCard;
