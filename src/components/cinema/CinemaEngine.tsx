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
import SceneBdayBuildup from "../scenes/SceneBdayBuildup";
import SceneBdayWish from "../scenes/SceneBdayWish";
import SceneBdayHeart from "../scenes/SceneBdayHeart";
import Scene10Finale from "../scenes/Scene10Finale";
import SceneBdayFinale from "../scenes/SceneBdayFinale";
import HeartCursor from "./HeartCursor";
import LoveMeter from "./LoveMeter";
import InterludeScreen from "./InterludeScreen";

interface SceneConfig {
  component: React.FC;
  title: string;
  duration: number;
  interlude?: string[];
  interludeDuration?: number;
}

const scenes: SceneConfig[] = [
  { component: Scene1FirstLook, title: "First Look", duration: 18 },
  {
    component: Scene2StaircaseMeetings, title: "Staircase Meetings", duration: 18,
    interlude: ["Days passed…", "But destiny had other plans…"], interludeDuration: 5,
  },
  {
    component: Scene3LoveGrowing, title: "Love Growing", duration: 18,
    interlude: ["We didn't fall in love in one day…", "We built it in small moments."], interludeDuration: 5,
  },
  {
    component: Scene4Proposal, title: "The Proposal", duration: 22,
    interlude: ["Some meetings are accidental…", "But some become destiny."], interludeDuration: 5,
  },
  {
    component: Scene5CollegeJourney, title: "College Journey", duration: 18,
    interlude: ["Time passed…", "But we stayed…", "Together…"], interludeDuration: 6,
  },
  {
    component: Scene6Memories, title: "Memories", duration: 18,
    interlude: ["And then came the memories…", "The ones we'll never forget."], interludeDuration: 5,
  },
  {
    component: Scene7DeepLove, title: "Deep Love", duration: 18,
    interlude: ["Somewhere between all those days…", "You became my everything."], interludeDuration: 5,
  },
  {
    component: Scene8BirthdayPlanning, title: "Birthday Planning", duration: 18,
    interlude: ["And now…", "Your special day arrived."], interludeDuration: 4,
  },
  {
    component: Scene9BirthdayClimax, title: "Happy Birthday", duration: 20,
    interlude: ["Because you deserve the world…"], interludeDuration: 4,
  },
  {
    component: SceneBdayBuildup, title: "The Moment", duration: 16,
    interlude: ["Close your eyes…", "Feel this moment…"], interludeDuration: 4,
  },
  {
    component: SceneBdayWish, title: "Our Future Together", duration: 45,
    interlude: ["And now…", "Your surprise gift…", "A glimpse of our forever… 💍"], interludeDuration: 5,
  },
  {
    component: SceneBdayHeart, title: "From My Heart", duration: 35,
    interlude: ["Every word I'm about to say…", "Comes straight from my heart."], interludeDuration: 5,
  },
  {
    component: Scene10Finale, title: "Forever", duration: 35,
    interlude: ["If I could go back…", "And choose again…", "I would still choose you."], interludeDuration: 6,
  },
  {
    component: SceneBdayFinale, title: "Happy Birthday", duration: 30,
    interlude: ["One last thing…", "From me to you…"], interludeDuration: 4,
  },
];

const CinemaEngine = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showInterlude, setShowInterlude] = useState(false);
  const [storyEnded, setStoryEnded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const musicStopTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const scene = scenes[currentScene];
  const SceneComponent = scene.component;

  // Start music when user clicks Begin - Neetho Unta (Surya Web Series)
  const musicStartedRef = useRef(false);
  useEffect(() => {
    if (showIntro || isMuted) return;
    if (musicStartedRef.current) return;
    musicStartedRef.current = true;
    const iframe = document.createElement("iframe");
    iframe.id = "yt-audio-player";
    iframe.src = "https://www.youtube.com/embed/pCcElfWYAGY?autoplay=1&loop=1&playlist=pCcElfWYAGY&controls=0&start=20";
    iframe.allow = "autoplay";
    iframe.style.cssText = "position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;z-index:-1;";
    document.body.appendChild(iframe);
  }, [showIntro, isMuted]);

  // Stop music 40s after last slide starts
  useEffect(() => {
    if (storyEnded) {
      musicStopTimerRef.current = setTimeout(() => {
        const el = document.getElementById("yt-audio-player");
        if (el) el.remove();
      }, 40000);
      return () => clearTimeout(musicStopTimerRef.current);
    }
  }, [storyEnded]);

  const goToScene = useCallback((index: number) => {
    if (index >= 0 && index < scenes.length) {
      const target = scenes[index];
      if (target.interlude && index > 0) {
        setShowInterlude(true);
        setTimeout(() => {
          setShowInterlude(false);
          setCurrentScene(index);
          if (index === scenes.length - 1) setStoryEnded(true);
        }, (target.interludeDuration || 4) * 1000);
      } else {
        setCurrentScene(index);
        if (index === scenes.length - 1) setStoryEnded(true);
      }
    }
  }, []);

  const nextScene = useCallback(() => {
    if (currentScene < scenes.length - 1) {
      goToScene(currentScene + 1);
    }
  }, [currentScene, goToScene]);

  const prevScene = useCallback(() => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
    }
  }, [currentScene]);

  // Autoplay
  useEffect(() => {
    if (!isPlaying || showIntro || showInterlude) return;
    timerRef.current = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        nextScene();
      }
    }, scene.duration * 1000);
    return () => clearTimeout(timerRef.current);
  }, [currentScene, isPlaying, scene.duration, nextScene, showIntro, showInterlude]);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nextScene(); }
      else if (e.key === "ArrowLeft") { prevScene(); }
      else if (e.key === "m") { setIsMuted((m) => !m); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextScene, prevScene]);

  // Handle mute toggle
  useEffect(() => {
    if (isMuted) {
      const existing = document.getElementById("yt-audio-player");
      if (existing) existing.remove();
    }
  }, [isMuted]);

  // Intro screen
  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center">
        <HeartCursor />
        <motion.div
          className="text-center px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.p
            className="text-sm font-body text-cinema-cream/70 tracking-[0.4em] uppercase mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            A Love Story Film
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-display italic text-cinema-cream/90 mb-3 cinema-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.5 }}
          >
            Dudu & Bubu
          </motion.h1>
          <motion.p
            className="text-sm font-display italic text-cinema-cream/40 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            "Some stories don't begin with a hello…"
          </motion.p>
          <motion.button
            className="px-10 py-3 rounded-full border border-cinema-cream/20 text-cinema-cream/60 font-body text-sm tracking-widest uppercase hover:text-cinema-cream/90 hover:border-cinema-cream/40 transition-all duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowIntro(false)}
          >
            ▶ Begin
          </motion.button>
        </motion.div>

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cinema-rose/10 text-xl"
            style={{ left: `${20 + i * 20}%`, top: `${30 + (i % 2) * 30}%` }}
            animate={{ y: [0, -15, 0], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 5 + i, repeat: Infinity }}
          >
            ❤
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <HeartCursor />
      <div className="absolute inset-0 film-grain pointer-events-none z-40 opacity-50" />

      <AnimatePresence>
        {showInterlude && scenes[currentScene + 1]?.interlude && (
          <motion.div key="interlude" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-50">
            <InterludeScreen lines={scenes[currentScene + 1].interlude!} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!showInterlude && (
          <motion.div key={currentScene} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.8, ease: "easeInOut" }}>
            <SceneComponent />
          </motion.div>
        )}
      </AnimatePresence>

      <LoveMeter progress={(currentScene + 1) / scenes.length} />

      <div className="fixed bottom-0 left-0 right-0 z-50 h-[2px] bg-muted/20">
        <motion.div className="h-full bg-cinema-rose/50" animate={{ width: `${((currentScene + 1) / scenes.length) * 100}%` }} transition={{ duration: 1 }} />
      </div>

      {/* Controls */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 opacity-30 hover:opacity-80 transition-opacity duration-500">
        <button onClick={prevScene} disabled={currentScene === 0} className="text-cinema-cream/60 hover:text-cinema-cream disabled:opacity-20 transition-colors text-lg">⟨</button>
        <button onClick={() => setIsPlaying(!isPlaying)} className="w-8 h-8 rounded-full border border-cinema-cream/20 flex items-center justify-center text-cinema-cream/60 hover:text-cinema-cream transition-colors text-xs">
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button onClick={nextScene} disabled={currentScene === scenes.length - 1} className="text-cinema-cream/60 hover:text-cinema-cream disabled:opacity-20 transition-colors text-lg">⟩</button>
        <button onClick={() => setIsMuted(!isMuted)} className="text-cinema-cream/60 hover:text-cinema-cream transition-colors text-sm ml-2">
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      <motion.div key={`title-${currentScene}`} className="fixed top-4 left-1/2 -translate-x-1/2 z-50" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 0.3, y: 0 }} transition={{ delay: 0.5, duration: 1 }}>
        <p className="text-[10px] font-body text-cinema-cream/40 tracking-[0.3em] uppercase">{scene.title}</p>
      </motion.div>
    </div>
  );
};

export default CinemaEngine;
