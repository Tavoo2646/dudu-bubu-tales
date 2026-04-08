import { motion } from "framer-motion";
import SceneImage from "../cinema/SceneImage";
import NarrationText from "../cinema/NarrationText";
import scene6 from "../../assets/scene6-memories.jpg";

const Scene6Memories = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cinema-night via-cinema-warm to-cinema-deep" />

      <div className="relative z-30 mb-4 px-8 max-w-md">
        <NarrationText
          lines={[
            "Then came our beautiful memories…",
            "Movies together… Trips together…",
            "Parks… Wonderla… College fests…",
          ]}
          startDelay={0.5}
          lineGap={1.8}
        />
      </div>

      <SceneImage
        src={scene6}
        alt="Our memories together"
        className="w-56 h-56 md:w-72 md:h-72 z-20"
        delay={5}
      />

      <div className="relative z-30 mt-5 px-8 max-w-md">
        <NarrationText
          lines={[
            "Laughing like kids…",
            "Living like best friends…",
          ]}
          startDelay={7}
          lineGap={1.8}
        />
      </div>

      <motion.div
        className="relative z-30 mt-4 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 11, duration: 1.5 }}
      >
        <p className="text-sm font-display italic text-cinema-cream/60 text-center cinema-subtitle">
          "We didn't just spend time…"
        </p>
        <p className="text-sm font-display italic text-cinema-cream/70 text-center cinema-subtitle mt-2">
          "We built memories."
        </p>
      </motion.div>
    </div>
  );
};

export default Scene6Memories;
