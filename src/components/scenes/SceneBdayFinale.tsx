import { motion } from "framer-motion";
import FloatingHearts from "../cinema/FloatingHearts";
import Confetti from "../cinema/Confetti";
import SceneImage from "../cinema/SceneImage";
import bdayFinaleImg from "../../assets/scene-bday-finale.jpg";

const SceneBdayFinale = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Celebration gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinema-rose/15 via-cinema-deep to-cinema-rose/10" />

      {/* Golden spotlight */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[800px] z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <div className="w-full h-full bg-gradient-radial from-cinema-gold/10 via-cinema-rose/5 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <FloatingHearts count={18} />
      <Confetti count={40} />

      {/* Fireworks */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`fw-${i}`}
            className="absolute text-xl"
            style={{ left: `${5 + Math.random() * 90}%`, top: `${5 + Math.random() * 40}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{ delay: 1 + i * 0.5, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          >
            {["✨", "🎆", "🎇", "💫", "⭐", "🎉", "🎊", "💥", "🌟", "🥳"][i]}
          </motion.div>
        ))}
      </div>

      {/* Big title */}
      <motion.h1
        className="relative z-30 text-3xl md:text-5xl font-display italic text-cinema-gold cinema-subtitle text-center px-6 leading-tight"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 2, ease: "easeOut" }}
        style={{ animation: "breathing 3s ease-in-out infinite" }}
      >
        Happy Birthday <br /> Dear Future Husband 💍
      </motion.h1>

      {/* Cute caption */}
      <motion.p
        className="relative z-30 mt-3 text-base md:text-lg font-display italic text-cinema-cream/80 text-center cinema-subtitle"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 1.5 }}
      >
        "The one who stole my heart and forgot to return it 💕"
      </motion.p>

      {/* Romantic message */}
      <motion.div
        className="relative z-30 mt-4 px-8 max-w-md flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 1.5 }}
      >
        <p className="text-sm md:text-base font-display italic text-cinema-cream/70 text-center cinema-subtitle leading-relaxed">
          Every day with you feels like a celebration,
        </p>
        <p className="text-sm md:text-base font-display italic text-cinema-cream/70 text-center cinema-subtitle leading-relaxed">
          but today is the most special one because the world got you.
        </p>
        <p className="text-sm md:text-base font-display italic text-cinema-cream/70 text-center cinema-subtitle leading-relaxed">
          I'm so grateful that out of all the people in this world,
        </p>
        <p className="text-sm md:text-base font-display italic text-cinema-gold/80 text-center cinema-subtitle leading-relaxed">
          you chose to love me. Happy Birthday, my forever person ❤️
        </p>
      </motion.div>

      {/* Cute Dudu Bubu cake cutting image */}
      <motion.div
        className="relative z-30 mt-4"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 9, duration: 1.5 }}
      >
        <SceneImage
          src={bdayFinaleImg}
          alt="Dudu and Bubu cutting birthday cake together"
          className="w-48 h-48 md:w-60 md:h-60"
        />
      </motion.div>

      {/* Falling balloons */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={`balloon-${i}`}
            className="absolute text-2xl"
            style={{ left: `${Math.random() * 100}%`, bottom: -30 }}
            animate={{
              y: [0, -(window.innerHeight + 60)],
              x: [0, Math.sin(i) * 30],
            }}
            transition={{ duration: 6 + Math.random() * 4, delay: 2 + Math.random() * 8, repeat: Infinity }}
          >
            {["🎈", "🎈", "🎈", "🎈", "🎈"][i % 5]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SceneBdayFinale;
