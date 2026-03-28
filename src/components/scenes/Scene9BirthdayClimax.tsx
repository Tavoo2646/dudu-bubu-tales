import { motion } from "framer-motion";
import CinemaSubtitle from "../cinema/CinemaSubtitle";
import Confetti from "../cinema/Confetti";
import SparkleOverlay from "../cinema/SparkleOverlay";
import SceneImage from "../cinema/SceneImage";
import TypewriterText from "../cinema/TypewriterText";
import scene9 from "../../assets/scene9-birthday.jpg";

const Scene9BirthdayClimax = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-gold/10 via-cinema-rose/10 to-cinema-deep" />

      <Confetti count={50} />
      <SparkleOverlay count={25} color="cinema-gold" />

      {/* Spotlight beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-[150px] h-[400px] bg-cinema-gold/5 rotate-12"
        style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)" }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-[150px] h-[400px] bg-cinema-rose/5 -rotate-12"
        style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />

      {/* Birthday banner */}
      <motion.div
        className="absolute top-8 z-30 flex items-center gap-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
      >
        {"🎈🎉🎂 HAPPY BIRTHDAY 🎂🎉🎈".split("").map((char, i) => (
          <motion.span
            key={i}
            className="text-sm md:text-lg font-display text-cinema-gold"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.08 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <SceneImage
        src={scene9}
        alt="Birthday celebration with cake"
        className="w-64 h-64 md:w-80 md:h-80 z-20"
        delay={0.3}
        animate="glow"
      />

      {/* Birthday wishes paragraph */}
      <div className="relative z-30 mt-4 px-6 max-w-md">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}>
          <TypewriterText
            text="Happy Birthday to the most amazing person in my life! You are my sunshine, my laughter, my peace, and my forever. May this year bring you all the happiness you give me every single day. I love you more than words can ever say. 🎂💕"
            delay={4}
            speed={0.03}
            className="text-xs md:text-sm text-center text-cinema-cream/80"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-10 z-30 px-8">
        <CinemaSubtitle
          text="Happy Birthday to the person who became my home."
          delay={2.5}
        />
      </div>

      {/* Floating emojis */}
      {["🎂", "🎁", "🎈", "🥳", "💖"].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl"
          style={{ left: `${15 + i * 18}%`, bottom: "-10%" }}
          animate={{ y: [0, -600], opacity: [1, 0], rotate: [0, 360] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: 2 + i * 0.5 }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default Scene9BirthdayClimax;
