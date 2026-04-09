import { motion } from "framer-motion";
import SceneImage from "../cinema/SceneImage";
import NarrationText from "../cinema/NarrationText";
import FloatingHearts from "../cinema/FloatingHearts";
import RainEffect from "../cinema/RainEffect";
import scene7 from "../../assets/scene7-deep-love.jpg";

const Scene7DeepLove = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-sunset/15 via-cinema-rose/8 to-cinema-deep" />
      <FloatingHearts count={8} />
      <RainEffect intensity={8} />

      <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-cinema-sunset/8 blur-3xl"
        animate={{ opacity: [0.2, 0.35, 0.2] }} transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-30 mb-4 px-8 max-w-md">
        <NarrationText lines={["You stopped being a person in my life…", "And became my peace.", "My safe place. My strength."]} startDelay={0.5} lineGap={2.2} />
      </div>

      <SceneImage src={scene7} alt="Holding hands in the rain" className="w-60 h-48 md:w-80 md:h-60 z-20" delay={6} />

      <div className="relative z-30 mt-5 px-8 max-w-md">
        <NarrationText lines={["Some people come into life…", "And become home."]} startDelay={8} lineGap={2} />
      </div>

      <motion.p className="relative z-30 mt-4 text-xs font-display italic text-cinema-gold/50 text-center cinema-subtitle"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 12, duration: 1.5 }}>
        "Nuvvu naa happiness kaadu… naa peace."
      </motion.p>
    </div>
  );
};

export default Scene7DeepLove;
