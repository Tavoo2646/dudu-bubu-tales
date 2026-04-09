import { motion } from "framer-motion";
import SceneImage from "../cinema/SceneImage";
import NarrationText from "../cinema/NarrationText";
import FloatingHearts from "../cinema/FloatingHearts";
import scene5 from "../../assets/scene5-college.jpg";

const Scene5CollegeJourney = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-gold/8 via-cinema-warm to-secondary" />
      <FloatingHearts count={8} />

      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div key={i} className="absolute text-sm opacity-20"
          style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
          animate={{ y: ["0vh", "105vh"], rotate: [0, 180] }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 6, ease: "linear" }}>
          🍂
        </motion.div>
      ))}

      <div className="relative z-30 mb-4 px-8 max-w-md">
        <NarrationText lines={["Life moved forward…", "Different colleges… Different paths…", "But same destination… each evening."]} startDelay={0.5} lineGap={2} />
      </div>

      <SceneImage src={scene5} alt="College journey together" className="w-60 h-48 md:w-80 md:h-60 z-20" delay={5} />

      <div className="relative z-30 mt-5 px-8 max-w-md">
        <NarrationText lines={["Ice creams… Street food… Long walks…", "And you dropping me safely every day."]} startDelay={7} lineGap={2} />
      </div>

      <motion.div className="relative z-30 mt-4 px-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 12, duration: 1.5 }}>
        <p className="text-xs font-display italic text-cinema-cream/50 text-center cinema-subtitle">"Love isn't big gifts… It's the small daily efforts."</p>
        <p className="text-xs font-display italic text-cinema-gold/40 text-center cinema-subtitle mt-2">"Nannu bus stop varaku drop chesina prathi roju… naa safety kante ekkuva care chesav."</p>
      </motion.div>
    </div>
  );
};

export default Scene5CollegeJourney;
