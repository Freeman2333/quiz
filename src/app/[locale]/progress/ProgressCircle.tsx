"use client";

import Icons from "@/icons";
import { useEffect, useState } from "react";

interface ProgressCircleProps {
  onComplete: () => void;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center h-auto">
      <div className="relative w-100 h-100">
        <Icons.ProgressCircle progress={progress} />
        <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-foreground">
          {progress}%
        </h1>
      </div>
    </div>
  );
};

export default ProgressCircle;
