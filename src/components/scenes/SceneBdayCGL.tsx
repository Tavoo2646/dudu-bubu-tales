import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "../cinema/FloatingHearts";
import Confetti from "../cinema/Confetti";
import SceneImage from "../cinema/SceneImage";

import cglImg from "../../assets/scene-dream-cgl.jpg";
import cookingImg from "../../assets/scene-life-cooking.jpg";
import cozyImg from "../../assets/scene-life-cozy.jpg";
import laughingImg from "../../assets/scene-life-laughing.jpg";

const lifeSlides = [
  { src: cglImg, alt: "SSC CGL Officer", label: "SSC CGL Officer 🏛️", text: "Our second dream… seeing you in that officer chair, serving the nation with pride 🇮🇳" },
  { src: cookingImg, alt: "Cooking together", label: "Cooking Together 🍳", text: "Making chai for you every morning… and stealing bites while you cook dinner 💕" },
  { src: cozyImg, alt: "Cozy evenings", label: "Cozy Evenings 📖", text: "Wrapped in a blanket, reading together… the most peaceful place is beside you 🤎" },
  { src: laughingImg, alt: "Laughing together", label: "Laughing Together 😂", text: "Our home will always be full of your laughter… that's all I need to be happy 💗" },
];

const SceneBdayCGL = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideshowDone, setSlideshowDone] = useState(false);
  const [showPromise, setShowPromise] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (slideshowDone) return;
    const timer = setTimeout(() => {
      if (currentSlide < lifeSlides.length - 1) {
        setCurrentSlide((p) => p + 1);
      } else {
        setSlideshowDone(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, slideshowDone]);

  useEffect(() => {
    if (!slideshowDone) return;
    const t1 = setTimeout(() => setShowPromise(true), 2000);
    const t2 = setTimeout(() => setShowFinal(true), 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [slideshowDone]);

  const heartEmojis = ["❤️", "💕", "💖", "💗", "💓", "💝", "💘", "💞", "🩷", "♥️", "💟", "❣️"];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,40%,8%)] via-[hsl(350,30%,12%)] to-[hsl(40,50%,10%)]" />

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {heartEmojis.map((emoji, i) => (
          <motion.div
            key={`heart-bg-${i}`}
            className="absolute"
            style={{ left: `${(i / heartEmojis.length) * 100}%`, bottom: -30, fontSize: 16 + Math.random() * 12 }}
            animate={{
              y: [0, -(window.innerHeight + 60)],
              x: [0, Math.sin(i * 0.8) * 40],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 360],
            }}
            transition={{ duration: 8 + Math.random() * 6, delay: i * 0.7, repeat: Infinity }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Gold sparkles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {Array.from({ length: 15 }, (_, i) => (
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

      <FloatingHearts count={8} />
      {slideshowDone && <Confetti count={30} />}

      {/* PHASE 1: Life together slideshow */}
      {!slideshowDone && (
        <div className="relative z-30 flex flex-col items-center gap-3 px-4 w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.88, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.88, rotateY: 15 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col items-center gap-3"
            >
              <SceneImage
                src={lifeSlides[currentSlide].src}
                alt={lifeSlides[currentSlide].alt}
                className="w-72 h-72 md:w-80 md:h-80"
              />

              <motion.p
                className="text-xl md:text-2xl font-display italic text-cinema-gold/90 cinema-subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {lifeSlides[currentSlide].label}
              </motion.p>

              <motion.p
                className="text-sm md:text-base font-display italic text-cinema-cream/70 text-center cinema-subtitle max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{ animation: "breathing 3s ease-in-out infinite" }}
              >
                {lifeSlides[currentSlide].text}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mt-2">
            {lifeSlides.map((_, i) => (
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

      {/* PHASE 2: The Promise */}
      {slideshowDone && (
        <div className="relative z-30 flex flex-col items-center justify-center w-full h-full px-4">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="w-full h-full bg-gradient-radial from-cinema-gold/10 via-cinema-rose/5 to-transparent rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-4 z-10 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.p
              className="text-2xl md:text-4xl font-display italic text-cinema-gold cinema-subtitle text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              style={{ animation: "breathing 3s ease-in-out infinite" }}
            >
              ✨ My Birthday Promise ✨
            </motion.p>

            <motion.p
              className="text-base md:text-xl font-display italic text-cinema-cream/80 text-center cinema-subtitle leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              "We have two dreams… IAS 🏛️ and SSC CGL 🇮🇳"
            </motion.p>

            {showPromise && (
              <>
                <motion.p
                  className="text-base md:text-xl font-display italic text-cinema-gold/90 text-center cinema-subtitle leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  style={{ animation: "breathing 3s ease-in-out infinite" }}
                >
                  "From this birthday to the next…
                  I promise to see you as an OFFICER 🏆"
                </motion.p>

                <motion.p
                  className="text-sm md:text-lg font-display italic text-cinema-cream/70 text-center cinema-subtitle leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1.5 }}
                >
                  "IAS or CGL… whichever comes first…
                  I will make sure you achieve it. This is my most precious birthday gift to you 💍"
                </motion.p>
              </>
            )}

            {showFinal && (
              <>
                <motion.p
                  className="text-sm md:text-base font-display italic text-cinema-cream/60 text-center cinema-subtitle leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  "I will stand beside you in every step… every struggle… every victory.
                  Our car 🚗 our home 🏡 our dreams… everything starts with this promise."
                </motion.p>

                <motion.p
                  className="text-xs text-cinema-gold/40 font-body mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1.5 }}
                >
                  ~ Your Future Wife & Biggest Supporter 💕
                </motion.p>
              </>
            )}
          </motion.div>

          {/* Fireworks */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`fw-${i}`}
                className="absolute text-lg"
                style={{ left: `${10 + Math.random() * 80}%`, top: `${5 + Math.random() * 30}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                transition={{ delay: 1 + i * 0.5, duration: 1.2, repeat: 2 }}
              >
                {["✨", "💫", "🎆", "⭐", "💛", "🪷", "🇮🇳", "🏛️"][i % 8]}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SceneBdayCGL;
