import { motion } from "framer-motion";
import CinemaGif from "../cinema/CinemaGif";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import { gifMap } from "../../data/gifMap";

const Scene4Proposal = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-rose/20 via-cinema-warm to-cinema-deep" />

      {/* Spotlight effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[600px] bg-cinema-gold/5"
        style={{
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-20 flex flex-col items-center gap-6">
        <div className="flex items-end gap-8">
          <CinemaGif src={gifMap.proposing.url} alt={gifMap.proposing.alt} delay={0.5} size="lg" />
          <CinemaGif src={gifMap.thinking.url} alt={gifMap.thinking.alt} delay={1.5} size="md" />
        </div>

        {/* Calendar showing 6 months */}
        <motion.div
          className="mt-4 flex gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => (
            <motion.div
              key={month}
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-cinema-rose/20 border border-cinema-rose/30 flex items-center justify-center text-xs font-body text-cinema-cream/80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 + i * 0.15 }}
            >
              {month}
            </motion.div>
          ))}
        </motion.div>

        {/* Acceptance */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.5, type: "spring", stiffness: 200 }}
        >
          <CinemaGif src={gifMap.acceptanceHug.url} alt={gifMap.acceptanceHug.alt} delay={4.5} size="md" />
        </motion.div>
      </div>

      <div className="absolute bottom-20 z-30 px-8">
        <CinemaSubtitle text="She said yes... after 6 months of beautiful chaos." delay={5} />
      </div>
    </div>
  );
};

export default Scene4Proposal;
