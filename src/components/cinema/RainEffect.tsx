const RainEffect = ({ intensity = 40 }: { intensity?: number }) => {
  const drops = Array.from({ length: intensity }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.4 + 0.2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {drops.map((d) => (
        <div
          key={d.id}
          className="raindrop absolute w-[1px] h-4 bg-cinema-blush/30"
          style={{
            left: `${d.left}%`,
            "--duration": `${d.duration}s`,
            "--delay": `${d.delay}s`,
            opacity: d.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default RainEffect;
