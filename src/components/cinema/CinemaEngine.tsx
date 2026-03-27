import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Scene1FirstLook from "../scenes/Scene1FirstLook";
import Scene2StaircaseMeetings from "../scenes/Scene2StaircaseMeetings";
import Scene3LoveGrowing from "../scenes/Scene3LoveGrowing";
import Scene4Proposal from "../scenes/Scene4Proposal";
import Scene5CollegeJourney from "../scenes/Scene5CollegeJourney";
import Scene6Memories from "../scenes/Scene6Memories";
import Scene7DeepLove from "../scenes/Scene7DeepLove";
import Scene8BirthdayPlanning from "../scenes/Scene8BirthdayPlanning";
import Scene9BirthdayClimax from "../scenes/Scene9BirthdayClimax";
import Scene10Finale from "../scenes/Scene10Finale";
import HeartCursor from "../cinema/HeartCursor";
import LoveMeter from "../cinema/LoveMeter";
import CinemaProgress from "../cinema/CinemaProgress";

interface SceneConfig {
  component: React.FC;
  title: string;
  duration: number; // seconds before auto-advance
  dayCount: number;
}

const scenes: SceneConfig[] = [
  { component: Scene1FirstLook, title: "First Look", duration: 12, dayCount: 1 },
  { component: Scene2StaircaseMeetings, title: "Staircase Meetings", duration: 12, dayCount: 14 },
  { component: Scene3LoveGrowing, title: "Love Growing", duration: 12, dayCount: 45 },
  { component: Scene4Proposal, title: "The Proposal", duration: 14, dayCount: 90 },
  { component: Scene5CollegeJourney, title: "College Journey", duration: 12, dayCount: 180 },
  { component: Scene6Memories, title: "Memories", duration: 12, dayCount: 300 },
  { component: Scene7DeepLove, title: "Deep Love", duration: 12, dayCount: 400 },
  { component: Scene8BirthdayPlanning, title: "Birthday Planning", duration: 12, dayCount: 500 },
  { component: Scene9BirthdayClimax, title: "Happy Birthday!", duration: 14, dayCount: 545 },
  { component: Scene10Finale, title: "Forever...", duration: 20, dayCount: 999 },
];

const transitions = [
  // Fade to black
  {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1.2 },
  },
  // Slide from right
  {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  // Scale zoom
  {
    initial: { scale: 1.3, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.7, opacity: 0 },
    transition: { duration: 1, ease: "easeOut" },
  },
  // Slide up
  {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
    transition: { duration: 0.8, ease: "easeInOut" },
  },
];

const CinemaEngine = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [showSecret, setShowSecret] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const scene = scenes[currentScene];
  const SceneComponent = scene.component;
  const transitionVariant = transitions[currentScene % transitions.length];

  const goToScene = useCallback((index: number) => {
    if (index >= 0 && index < scenes.length) {
      setCurrentScene(index);
    }
  }, []);

  const nextScene = useCallback(() => {
    goToScene(Math.min(currentScene + 1, scenes.length - 1));
  }, [currentScene, goToScene]);

  const prevScene = useCallback(() => {
    goToScene(Math.max(currentScene - 1, 0));
  }, [currentScene, goToScene]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoplay || showIntro) return;
    timerRef.current = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        nextScene();
      }
    }, scene.duration * 1000);
    return () => clearTimeout(timerRef.current);
  }, [currentScene, isAutoplay, scene.duration, nextScene, showIntro]);

  // Keyboard controls
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextScene();
      } else if (e.key === "ArrowLeft") {
        prevScene();
      } else if (e.key === "m") {
        setIsMuted((m) => !m);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextScene, prevScene]);

  // Background music
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA="
      );
      audioRef.current.loop = true;
    }
    if (isMuted) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  }, [isMuted]);

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center">
        <HeartCursor />
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.p
            className="text-sm font-body text-cinema-cream/40 tracking-[0.3em] uppercase mb-6"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            A Love Story Film Presents
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-display italic text-cinema-gold mb-4 cinema-subtitle">
            Dudu & Bubu
          </h1>
          <p className="text-lg font-body text-cinema-cream/60 mb-12">
            A tale written in the stars ✨
          </p>
          <motion.button
            className="px-8 py-3 rounded-full bg-cinema-rose/20 border border-cinema-rose/30 text-cinema-cream font-body text-sm tracking-wider uppercase hover:bg-cinema-rose/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowIntro(false)}
          >
            ▶ Begin Our Story
          </motion.button>
        </motion.div>

        {/* Decorative floating hearts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cinema-rose/20 text-2xl"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 4 + i, repeat: Infinity }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <HeartCursor />

      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain pointer-events-none z-40" />

      {/* Scene */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          className="absolute inset-0"
          initial={transitionVariant.initial}
          animate={transitionVariant.animate}
          exit={transitionVariant.exit}
          transition={transitionVariant.transition}
        >
          <SceneComponent />
        </motion.div>
      </AnimatePresence>

      {/* Love Meter */}
      <LoveMeter progress={(currentScene + 1) / scenes.length} />

      {/* Progress Bar */}
      <CinemaProgress
        current={currentScene}
        total={scenes.length}
        sceneTitle={scene.title}
        dayCount={scene.dayCount}
      />

      {/* Controls overlay */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-3">
        {/* Sound toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-9 h-9 rounded-full bg-muted/20 border border-cinema-cream/10 flex items-center justify-center text-cinema-cream/60 hover:text-cinema-cream transition-colors text-sm"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>

        {/* Autoplay toggle */}
        <button
          onClick={() => setIsAutoplay(!isAutoplay)}
          className="w-9 h-9 rounded-full bg-muted/20 border border-cinema-cream/10 flex items-center justify-center text-cinema-cream/60 hover:text-cinema-cream transition-colors text-xs"
        >
          {isAutoplay ? "⏸" : "▶"}
        </button>
      </div>

      {/* Navigation arrows */}
      <div className="fixed top-1/2 -translate-y-1/2 left-4 z-50">
        <button
          onClick={prevScene}
          disabled={currentScene === 0}
          className="w-10 h-10 rounded-full bg-muted/10 border border-cinema-cream/10 flex items-center justify-center text-cinema-cream/40 hover:text-cinema-cream disabled:opacity-20 transition-all"
        >
          ‹
        </button>
      </div>
      <div className="fixed top-1/2 -translate-y-1/2 right-14 z-50">
        <button
          onClick={nextScene}
          disabled={currentScene === scenes.length - 1}
          className="w-10 h-10 rounded-full bg-muted/10 border border-cinema-cream/10 flex items-center justify-center text-cinema-cream/40 hover:text-cinema-cream disabled:opacity-20 transition-all"
        >
          ›
        </button>
      </div>

      {/* Next Scene button */}
      {currentScene < scenes.length - 1 && (
        <motion.button
          className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-cinema-rose/15 border border-cinema-rose/20 text-xs font-body text-cinema-cream/60 hover:text-cinema-cream hover:bg-cinema-rose/25 transition-all tracking-wider uppercase"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextScene}
        >
          Next Scene →
        </motion.button>
      )}

      {/* Secret message button */}
      <button
        onClick={() => setShowSecret(!showSecret)}
        className="fixed bottom-16 right-4 z-50 w-8 h-8 rounded-full bg-cinema-gold/10 border border-cinema-gold/20 flex items-center justify-center text-sm hover:bg-cinema-gold/20 transition-colors"
      >
        💌
      </button>
      <AnimatePresence>
        {showSecret && (
          <motion.div
            className="fixed bottom-28 right-4 z-50 max-w-xs p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-cinema-rose/20"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
          >
            <p className="text-sm font-display italic text-cinema-cream/80">
              "You are the reason I believe in forever. Every moment with you is a scene I never want to end." 💕
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CinemaEngine;
