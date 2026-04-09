import { motion } from "framer-motion";
import SceneImage from "../cinema/SceneImage";
import NarrationText from "../cinema/NarrationText";
import FloatingHearts from "../cinema/FloatingHearts";
import Confetti from "../cinema/Confetti";
import scene9 from "../../assets/scene9-birthday.jpg";

const Scene9BirthdayClimax = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-gold/8 via-cinema-rose/5 to-cinema-deep" />
      <FloatingHearts count={8} />
      <Confetti count={20} />

      <div className="relative z-30 mb-4 px-8 max-w-md">
        <NarrationText lines={["Because you deserve surprises…", "You deserve happiness… You deserve love."]} startDelay={0.5} lineGap={2} />
      </div>

      <SceneImage src={scene9} alt="Birthday celebration" className="w-56 h-56 md:w-72 md:h-72 z-20" delay={4} />

      <div className="relative z-30 mt-4 px-8 max-w-md">
        <NarrationText lines={["Today is not just your birthday…", "It is the day the person who changed my life was born."]} startDelay={6} lineGap={2.2} />
      </div>

      <motion.div className="relative z-30 mt-4 flex flex-col items-center px-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 11, duration: 2 }}>
        <p className="text-sm md:text-base font-display italic text-cinema-gold/80 text-center cinema-subtitle">"Happy Birthday to the boy…"</p>
        <p className="text-xs md:text-sm font-display italic text-cinema-cream/60 text-center cinema-subtitle mt-1.5">"Who became my best friend… My support… My courage… My love."</p>
      </motion.div>

      <motion.div className="relative z-30 mt-3 px-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 14, duration: 1.5 }}>
        <p className="text-xs font-display italic text-cinema-gold/50 text-center cinema-subtitle">"Happy Birthday naa bangaram…"</p>
        <p className="text-xs font-display italic text-cinema-gold/40 text-center cinema-subtitle mt-1">"Nuvvu naa life lo vachinappati nundi everything became better."</p>
      </motion.div>
    </div>
  );
};

export default Scene9BirthdayClimax;
