import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import Fireflies from "../cinema/Fireflies";
import SparkleOverlay from "../cinema/SparkleOverlay";
import SceneImage from "../cinema/SceneImage";
import TypewriterText from "../cinema/TypewriterText";
import scene5 from "../../assets/scene5-college.jpg";

const Scene5CollegeJourney = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-gold/10 via-cinema-warm to-secondary" />

      {/* Falling autumn leaves */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lg"
          style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
          animate={{ y: ["0vh", "105vh"], x: [0, Math.random() * 40 - 20], rotate: [0, 360] }}
          transition={{ duration: Math.random() * 8 + 6, repeat: Infinity, delay: Math.random() * 5, ease: "linear" }}
        >
          {["🍂", "🍁", "🌿"][i % 3]}
        </motion.div>
      ))}

      <Fireflies count={12} />
      <SparkleOverlay count={10} color="cinema-gold" />

      <SceneImage
        src={scene5}
        alt="College journey together"
        className="w-72 h-56 md:w-96 md:h-72 z-20"
        delay={0.3}
        animate="float"
      />

      {/* Memory polaroid strip */}
      <motion.div
        className="relative z-20 flex gap-3 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        {["🍦 Ice cream dates", "📚 Library hours", "🚌 Bus rides home"].map((memory, i) => (
          <motion.div
            key={i}
            className="px-3 py-2 bg-card/30 border border-cinema-cream/10 rounded-xl text-[10px] md:text-xs font-body text-cinema-cream/60 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -3 : 3 }}
            animate={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
            transition={{ delay: 3.5 + i * 0.3 }}
          >
            {memory}
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-28 z-30 px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5 }}>
          <TypewriterText
            text="Every road felt shorter with you walking beside me. Every boring lecture became fun with your silly notes."
            delay={5}
            className="text-xs md:text-sm text-center max-w-sm mx-auto"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-10 z-30 px-8">
        <CinemaSubtitle text="College roads, ice cream dates, and endless walks..." delay={2} />
      </div>
    </div>
  );
};

export default Scene5CollegeJourney;
