import { motion } from "framer-motion";
import SceneImage from "../cinema/SceneImage";
import NarrationText from "../cinema/NarrationText";
import FloatingHearts from "../cinema/FloatingHearts";
import scene4 from "../../assets/scene4-proposal.jpg";

const Scene4Proposal = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-rose/10 via-cinema-warm to-cinema-deep" />
      <FloatingHearts count={8} />

      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div key={i} className="absolute text-xs opacity-30"
          style={{ left: `${Math.random() * 100}%`, top: `-5%` }}
          animate={{ y: ["0vh", "110vh"], x: [0, Math.random() * 30 - 15], rotate: [0, 180] }}
          transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, delay: Math.random() * 6, ease: "linear" }}>
          🌸
        </motion.div>
      ))}

      <div className="relative z-30 mb-4 px-8 max-w-md">
        <NarrationText lines={["One day… I gathered courage…", "And told you what my heart already knew.", "I loved you."]} startDelay={0.5} lineGap={2} />
      </div>

      <SceneImage src={scene4} alt="The proposal moment" className="w-52 h-52 md:w-68 md:h-68 z-20" delay={5.5} />

      <div className="relative z-30 mt-4 px-8 max-w-md">
        <NarrationText lines={["You didn't say yes…", "But you never walked away.", "You took time… Not days… Not months…", "One whole year…"]} startDelay={7.5} lineGap={1.8} />
      </div>

      <motion.div className="relative z-30 mt-4 flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 14, duration: 1.5 }}>
        <p className="text-sm md:text-base font-display italic text-cinema-gold/80 text-center cinema-subtitle">"And then came January 9…"</p>
        <motion.p className="text-base md:text-lg font-display italic text-cinema-gold text-center cinema-subtitle mt-2"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 15.5, duration: 1 }}>
          "The day you said YES… ❤️"
        </motion.p>
        <motion.p className="text-xs font-display italic text-cinema-cream/40 text-center mt-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 17 }}>
          "Jan 9… naa life lo unforgettable date."
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Scene4Proposal;
