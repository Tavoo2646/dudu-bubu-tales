import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import SceneImage from "../cinema/SceneImage";
import scene4 from "../../assets/scene4-proposal.jpg";

const Scene4Proposal = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-rose/20 via-cinema-warm to-cinema-deep" />

      {/* Floating rose petals */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-sm"
          style={{ left: `${Math.random() * 100}%`, top: `-10%` }}
          animate={{ y: ["0vh", "110vh"], x: [0, Math.random() * 60 - 30], rotate: [0, 360] }}
          transition={{ duration: Math.random() * 6 + 5, repeat: Infinity, delay: Math.random() * 4, ease: "linear" }}
        >
          🌸
        </motion.div>
      ))}

      {/* Spotlight */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[600px] bg-cinema-gold/5"
        style={{ clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-20 flex flex-col items-center gap-6">
        <SceneImage
          src={scene4}
          alt="The proposal moment"
          className="w-72 h-72 md:w-96 md:h-96"
          delay={0.5}
          animate="breathe"
        />

        {/* Calendar - 12 months / 1 year journey */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 max-w-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
            <motion.div
              key={month}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-xs font-body ${
                month === "Jan"
                  ? "bg-cinema-gold/30 border-2 border-cinema-gold text-cinema-gold font-bold"
                  : "bg-cinema-rose/20 border border-cinema-rose/30 text-cinema-cream/80"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 + i * 0.1 }}
            >
              {month}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-sm font-body text-cinema-gold/80 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          January 9th ❤️
        </motion.p>
      </div>

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="She said yes... after 1 year of beautiful chaos. January 9th — the day everything changed." delay={5} />
      </div>
    </div>
  );
};

export default Scene4Proposal;
