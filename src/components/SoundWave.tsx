
import { useEffect, useState } from 'react';

export const SoundWave = () => {
  const [waves, setWaves] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaves(prev => prev.map(() => Math.random()));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2">
      {waves.map((wave, index) => (
        <div
          key={index}
          className="bg-primary rounded-full animate-pulse-slow"
          style={{
            width: '4px',
            height: `${20 + wave * 40}px`,
            animationDelay: `${index * 0.1}s`,
            animationDuration: '1.5s'
          }}
        />
      ))}
    </div>
  );
};
