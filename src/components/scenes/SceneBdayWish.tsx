import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "../cinema/FloatingHearts";
import Confetti from "../cinema/Confetti";
import SceneImage from "../cinema/SceneImage";

import haldiImg from "../../assets/scene-wedding-haldi.jpg";
import sangeetImg from "../../assets/scene-wedding-sangeet.jpg";
import pellichupuluImg from "../../assets/scene-wedding-pellichupulu.jpg";
import weddingMainImg from "../../assets/scene-wedding-main.jpg";

const slideshow = [
  { src: haldiImg, alt: "Dudu and Bubu haldi ceremony", label: "Haldi 💛" },
  { src: sangeetImg, alt: "Dudu and Bubu sangeet night", label: "Sangeet 💃" },
  { src: pellichupuluImg, alt: "Dudu and Bubu pellichupulu", label: "Pelli Chupulu 💍" },
];

const SceneBdayWish = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideshowDone, setSlideshowDone] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Auto slideshow: 3.5s per image, then show main wedding
  useEffect(() => {
    if (slideshowDone) return;
    const timer = setTimeout(() => {
      if (currentSlide < slideshow.length - 1) {
        setCurrentSlide((p) => p + 1);
      } else {
        setSlideshowDone(true);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [currentSlide, slideshowDone]);

  // Show message after main image appears
  useEffect(() => {
    if (!slideshowDone) return;
    const t = setTimeout(() => setShowMessage(true), 2500);
    return () => clearTimeout(t);
  }, [slideshowDone]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Wedding themed gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,40%,8%)] via-[hsl(350,30%,12%)] to-[hsl(40,50%,10%)]" />

      {/* Gold sparkle particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-cinema-gold/40"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, fontSize: 8 + Math.random() * 6 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 4, repeat: Infinity }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Falling rose petals */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute"
            style={{ left: `${Math.random() * 100}%`, top: -20, fontSize: 12 + Math.random() * 6 }}
            animate={{
              y: [0, window.innerHeight + 40],
              x: [0, Math.sin(i) * 50],
              rotate: [0, 360],
              opacity: [0.5, 0],
            }}
            transition={{ duration: 5 + Math.random() * 3, delay: 1 + Math.random() * 8, repeat: Infinity }}
          >
            🌹
          </motion.div>
        ))}
      </div>

      <FloatingHearts count={8} />
      {slideshowDone && <Confetti count={30} />}

      {/* PHASE 1: Auto slideshow - Haldi, Sangeet, Pellichupulu */}
      {!slideshowDone && (
        <div className="relative z-30 flex flex-col items-center gap-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <SceneImage
                src={slideshow[currentSlide].src}
                alt={slideshow[currentSlide].alt}
                className="w-52 h-52 md:w-64 md:h-64"
              />
            </motion.div>
          </AnimatePresence>

          <motion.p
            key={`label-${currentSlide}`}
            className="text-lg md:text-xl font-display italic text-cinema-gold/90 cinema-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {slideshow[currentSlide].label}
          </motion.p>

          {/* Slide dots */}
          <div className="flex gap-2 mt-2">
            {slideshow.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === currentSlide ? "bg-cinema-gold/80 scale-125" : "bg-cinema-cream/20"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* PHASE 2: Main wedding image + heartfelt message */}
      {slideshowDone && (
        <div className="relative z-30 flex flex-col items-center gap-4 px-6 max-w-lg">
          {/* Spotlight glow */}
          <motion.div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="w-full h-full bg-gradient-radial from-cinema-gold/10 via-cinema-rose/5 to-transparent rounded-full blur-3xl" />
          </motion.div>

          {/* Main wedding image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <SceneImage
              src={weddingMainImg}
              alt="Dudu and Bubu wedding ceremony"
              className="w-56 h-56 md:w-72 md:h-72"
            />
          </motion.div>

          {/* Wedding fireworks */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`fw-${i}`}
                className="absolute text-lg"
                style={{ left: `${10 + Math.random() * 80}%`, top: `${5 + Math.random() * 30}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                transition={{ delay: 1.5 + i * 0.4, duration: 1.2, repeat: 2 }}
              >
                {["✨", "💫", "🎆", "⭐", "💛", "🪷"][i % 6]}
              </motion.div>
            ))}
          </div>

          {/* Heartfelt wedding message */}
          {showMessage && (
            <div className="flex flex-col items-center gap-3 mt-2">
              <motion.p
                className="text-base md:text-xl font-display italic text-cinema-gold/90 text-center cinema-subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                style={{ animation: "breathing 3s ease-in-out infinite" }}
              >
                "My biggest dream is to see you as my groom…"
              </motion.p>

              <motion.p
                className="text-sm md:text-lg font-display italic text-cinema-cream/70 text-center cinema-subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1.5 }}
              >
                "Walking around the fire with you, holding your hand forever…"
              </motion.p>

              <motion.p
                className="text-sm md:text-lg font-display italic text-cinema-cream/60 text-center cinema-subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 1.5 }}
              >
                "This is my birthday gift to you — a promise of our forever. 💍"
              </motion.p>

              <motion.p
                className="text-xs text-cinema-gold/40 font-body mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 6, duration: 1.5 }}
              >
                ~ Your Future Wife 💕
              </motion.p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SceneBdayWish;
