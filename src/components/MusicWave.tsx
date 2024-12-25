export const MusicWave = () => {
  return (
    <div className="wave-animation flex items-end h-12 gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{ ["--i"]: i } as React.CSSProperties} />
      ))}
    </div>
  );
};