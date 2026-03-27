const colors = [
  "bg-cinema-rose",
  "bg-cinema-gold",
  "bg-cinema-blush",
  "bg-primary",
  "bg-accent",
];

const Confetti = ({ count = 30 }: { count?: number }) => {
  const pieces = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: Math.random() * 2 + 2,
    delay: Math.random() * 3,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {pieces.map((p) => (
        <div
          key={p.id}
          className={`confetti-piece absolute rounded-sm ${p.color}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Confetti;
