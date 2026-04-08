import { motion } from "framer-motion";
import SceneImage from "../cinema/SceneImage";
import NarrationText from "../cinema/NarrationText";
import scene8 from "../../assets/scene8-planning.jpg";

const Scene8BirthdayPlanning = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-deep via-cinema-night to-cinema-deep" />

      {/* Soft theater curtain edges */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cinema-rose/10 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cinema-rose/10 to-transparent" />

      <div className="relative z-30 mb-4 px-8 max-w-md">
        <NarrationText
          lines={[
            "And now… your special day arrived.",
            "The day my favorite person was born.",
          ]}
          startDelay={0.5}
          lineGap={2.2}
        />
      </div>

      <SceneImage
        src={scene8}
        alt="Birthday planning"
        className="w-56 h-56 md:w-72 md:h-72 z-20"
        delay={4.5}
      />

      <div className="relative z-30 mt-5 px-8 max-w-md">
        <NarrationText
          lines={[
            "So I wanted to make it special…",
            "Just like you made my life special.",
            "Planning silently… Hiding excitement…",
            "Waiting for your smile.",
          ]}
          startDelay={6.5}
          lineGap={1.8}
        />
      </div>
    </div>
  );
};

export default Scene8BirthdayPlanning;
