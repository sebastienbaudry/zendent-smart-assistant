
import { useEffect, useState } from 'react';

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const StatCounter = ({ end, duration = 2000, suffix = '', prefix = '' }: StatCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
};
