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
  const [slideshowDone, setSlideshowDone] = useState(false);
  const [iasPhase, setIasPhase] = useState<"fullscreen" | "shrink" | "message">("fullscreen");
  const [showPromise, setShowPromise] = useState(false);

  // Auto slideshow: 4s per image
  useEffect(() => {
    if (slideshowDone) return;
    const timer = setTimeout(() => {
      if (currentSlide < slideshow.length - 1) {
        setCurrentSlide((p) => p + 1);
      } else {
        setSlideshowDone(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSlide, slideshowDone]);

  // IAS dream sequence phases
  useEffect(() => {
    if (!slideshowDone) return;
    // fullscreen for 4s, then shrink
    const t1 = setTimeout(() => setIasPhase("shrink"), 4000);
    const t2 = setTimeout(() => setIasPhase("message"), 5500);
    const t3 = setTimeout(() => setShowPromise(true), 8000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [slideshowDone]);

  const heartEmojis = ["❤️", "💕", "💖", "💗", "💓", "💝", "💘", "💞", "🩷", "♥️", "💟", "❣️"];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,40%,8%)] via-[hsl(350,30%,12%)] to-[hsl(40,50%,10%)]" />

      {/* Floating heart emojis background */}
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

      {/* PHASE 1: Auto slideshow - Wedding + Dreams */}
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
                src={slideshow[currentSlide].src}
                alt={slideshow[currentSlide].alt}
                className="w-72 h-72 md:w-80 md:h-80"
              />

              {/* Label */}
              <motion.p
                className="text-xl md:text-2xl font-display italic text-cinema-gold/90 cinema-subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {slideshow[currentSlide].label}
              </motion.p>

              {/* Lovely text */}
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

      {/* PHASE 2: IAS Dream - Full screen then shrink with message */}
      {slideshowDone && (
        <div className="relative z-30 flex flex-col items-center justify-center w-full h-full px-4">
          {/* Spotlight */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="w-full h-full bg-gradient-radial from-cinema-gold/10 via-cinema-rose/5 to-transparent rounded-full blur-3xl" />
          </motion.div>

          {/* IAS Image */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: 1,
              scale: iasPhase === "fullscreen" ? 1.1 : 0.85,
              y: iasPhase === "message" ? -40 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-cinema-gold/10 blur-3xl scale-125" />
              <motion.img
                src={dreamIasImg}
                alt="IAS Jagadeesh - Our Dream"
                className={`relative rounded-3xl shadow-2xl object-cover transition-all duration-1000 ${
                  iasPhase === "fullscreen"
                    ? "w-[90vw] h-[50vh] md:w-[70vw] md:h-[55vh]"
                    : "w-72 h-44 md:w-96 md:h-56"
                }`}
                animate={{ scale: [1, 1.01, 1], y: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                loading="eager"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/50 via-transparent to-background/20 pointer-events-none" />
            </div>
          </motion.div>

          {/* Title for IAS */}
          <motion.p
            className="text-xl md:text-2xl font-display italic text-cinema-gold cinema-subtitle mt-3 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: iasPhase === "fullscreen" ? 1 : 0.8 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ animation: "breathing 3s ease-in-out infinite" }}
          >
            IAS JAGADEESH 🏛️
          </motion.p>

          {/* Message overlay */}
          {iasPhase === "message" && (
            <motion.div
              className="flex flex-col items-center gap-2 mt-3 z-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <motion.p
                className="text-base md:text-xl font-display italic text-cinema-gold/90 text-center cinema-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                style={{ animation: "breathing 3s ease-in-out infinite" }}
              >
                "My most precious birthday gift to you…"
              </motion.p>

              <motion.p
                className="text-sm md:text-lg font-display italic text-cinema-cream/70 text-center cinema-subtitle leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
              >
                "From this birthday to the next… I promise to see you as IAS Jagadeesh 🇮🇳"
              </motion.p>

              {showPromise && (
                <>
                  <motion.p
                    className="text-sm md:text-base font-display italic text-cinema-cream/60 text-center cinema-subtitle leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    "I will stand beside you in every step… every struggle… every victory."
                  </motion.p>

                  <motion.p
                    className="text-sm md:text-base font-display italic text-cinema-cream/50 text-center cinema-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1.5 }}
                  >
                    "Our car 🚗 our home 🏡 our dreams… everything starts with this promise 💍"
                  </motion.p>

                  <motion.p
                    className="text-xs text-cinema-gold/40 font-body mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1.5 }}
                  >
                    ~ Your Future Wife & Biggest Supporter 💕
                  </motion.p>
                </>
              )}
            </motion.div>
          )}

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

export default SceneBdayWish;
