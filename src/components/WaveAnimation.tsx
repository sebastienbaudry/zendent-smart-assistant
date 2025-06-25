
export const WaveAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-primary/20 rounded-full animate-wave"
            style={{
              width: '300px',
              height: '300px',
              left: '-150px',
              top: '-150px',
              animationDelay: `${i * 0.7}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </div>
  );
};
