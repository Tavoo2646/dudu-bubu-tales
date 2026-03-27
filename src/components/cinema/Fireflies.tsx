const Fireflies = ({ count = 20 }: { count?: number }) => {
  const flies = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {flies.map((f) => (
        <div
          key={f.id}
          className="firefly absolute rounded-full bg-cinema-gold"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            boxShadow: `0 0 ${f.size * 3}px hsl(35 80% 60% / 0.6)`,
            "--duration": `${f.duration}s`,
            "--delay": `${f.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Fireflies;
