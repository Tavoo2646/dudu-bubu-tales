import { motion } from "framer-motion";
import SceneImage from "../cinema/SceneImage";
import NarrationText from "../cinema/NarrationText";
import FloatingHearts from "../cinema/FloatingHearts";
import scene3 from "../../assets/scene3-love-growing.jpg";

const Scene3LoveGrowing = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-deep via-cinema-night to-cinema-warm" />
      <FloatingHearts count={8} />

      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div key={i} className="absolute w-[2px] h-[2px] bg-cinema-cream/30 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 40}%` }}
          animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: Math.random() * 4 + 3, repeat: Infinity }}
        />
      ))}

      <div className="relative z-30 mb-4 px-8 max-w-md">
        <NarrationText lines={["Nights became longer…", "Because our conversations never wanted to end."]} startDelay={0.5} lineGap={2} />
      </div>

      <SceneImage src={scene3} alt="Late night conversations" className="w-56 h-56 md:w-72 md:h-72 z-20" delay={4} />

      <div className="relative z-30 mt-5 px-8 max-w-md">
        <NarrationText lines={["Calls… Messages… Care… Protection…", "Slowly… you became my daily happiness."]} startDelay={6} lineGap={2} />
      </div>

      <motion.div className="relative z-30 mt-4 px-8 max-w-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 11, duration: 1.5 }}>
        <p className="text-xs font-display italic text-cinema-gold/50 text-center cinema-subtitle">"Roju matladakunda unte day complete avvaledu…"</p>
        <p className="text-xs font-display italic text-cinema-gold/50 text-center cinema-subtitle mt-1.5">"Nuvvu habit kaadu… necessity aipoyav."</p>
      </motion.div>
    </div>
  );
};

export default Scene3LoveGrowing;
