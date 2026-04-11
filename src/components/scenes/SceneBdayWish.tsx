import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "../cinema/FloatingHearts";
import Confetti from "../cinema/Confetti";
import SceneImage from "../cinema/SceneImage";

import haldiImg from "../../assets/scene-wedding-haldi.jpg";
import sangeetImg from "../../assets/scene-wedding-sangeet.jpg";
import pellichupuluImg from "../../assets/scene-wedding-pellichupulu.jpg";
import weddingMainImg from "../../assets/scene-wedding-main.jpg";
import dreamCarImg from "../../assets/scene-dream-car.jpg";
import dreamHouseImg from "../../assets/scene-dream-house.jpg";
import dreamIasImg from "../../assets/scene-dream-ias.jpg";

const slideshow = [
  { src: haldiImg, alt: "Haldi ceremony", label: "Haldi 💛", text: "Our first celebration as one… turmeric, laughter, and pure love 💛" },
  { src: sangeetImg, alt: "Sangeet night", label: "Sangeet 💃", text: "Dancing together under the stars… every beat is for you 🎶" },
  { src: pellichupuluImg, alt: "Pelli Chupulu", label: "Pelli Chupulu 💍", text: "The moment our families said yes… my heart knew it was forever 💕" },
  { src: weddingMainImg, alt: "Wedding ceremony", label: "Our Wedding 🪷", text: "Seven steps, seven promises… one lifetime of love together 🔥" },
  { src: dreamCarImg, alt: "Our dream car", label: "Our Dream Car 🚗", text: "Driving into our future together… every road leads to happiness 🌟" },
  { src: dreamHouseImg, alt: "Our dream house", label: "Our Dream Home 🏡", text: "Building our little paradise… where love lives in every corner 🏠💕" },
  { src: dreamIasImg, alt: "IAS Jagadeesh", label: "IAS JAGADEESH 🏛️", text: "My biggest dream… seeing you serve the nation as an IAS Officer 🇮🇳" },
];

const SceneBdayWish = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slideshow: 5s per image
  useEffect(() => {
    if (currentSlide >= slideshow.length - 1) return;
    const timer = setTimeout(() => {
      setCurrentSlide((p) => p + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

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

      {/* Slideshow */}
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
              src={slideshow[currentSlide].src}
              alt={slideshow[currentSlide].alt}
              className="w-72 h-72 md:w-80 md:h-80"
            />

            <motion.p
              className="text-xl md:text-2xl font-display italic text-cinema-gold/90 cinema-subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {slideshow[currentSlide].label}
            </motion.p>

            <motion.p
              className="text-sm md:text-base font-display italic text-cinema-cream/70 text-center cinema-subtitle max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ animation: "breathing 3s ease-in-out infinite" }}
            >
              {slideshow[currentSlide].text}
            </motion.p>
          </motion.div>
        </AnimatePresence>

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
    </div>
  );
};

export default SceneBdayWish;
