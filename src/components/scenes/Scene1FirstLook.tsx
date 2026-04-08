import { motion } from "framer-motion";
import SceneImage from "../cinema/SceneImage";
import NarrationText from "../cinema/NarrationText";
import scene1 from "../../assets/scene1-first-look.jpg";

const Scene1FirstLook = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Night sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-night via-cinema-warm to-background" />

      {/* Soft stars - fewer, calmer */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-cinema-cream/40 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 35}%` }}
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      {/* Moon glow */}
      <motion.div
        className="absolute top-10 right-14 w-16 h-16 rounded-full bg-cinema-cream/15"
        style={{ boxShadow: "0 0 60px hsl(35 30% 90% / 0.15)" }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Opening narration */}
      <div className="relative z-30 mb-6 px-8">
        <NarrationText
          lines={[
            "Some stories don't begin with a hello…",
            "They begin with a moment…",
            "A look… that feels different…",
          ]}
          startDelay={0.5}
          lineGap={2}
        />
      </div>

      <SceneImage
        src={scene1}
        alt="First look under moonlight"
        className="w-56 h-56 md:w-72 md:h-72 z-20"
        delay={6}
      />

      {/* Emotional text after image */}
      <div className="relative z-30 mt-6 px-8 max-w-md">
        <NarrationText
          lines={[
            "That day… when you came searching for a rented house…",
            "I didn't know why… but my heart noticed you.",
          ]}
          startDelay={8}
          lineGap={2.5}
        />
      </div>

      {/* Telugu touch */}
      <motion.p
        className="relative z-30 mt-4 text-xs md:text-sm font-display italic text-cinema-gold/60 text-center cinema-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 13, duration: 1.5 }}
      >
        "Endhuko teliyadu… kani aa first look lo oka special feeling undi…"
      </motion.p>
    </div>
  );
};

export default Scene1FirstLook;
