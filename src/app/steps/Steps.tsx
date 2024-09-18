"use client";

import { usePathname } from "next/navigation";

const STEPS = [
  {
    url: "/steps/lang",
  },
  {
    url: "/steps/gender",
  },
  {
    url: "/steps/age",
  },
  {
    url: "/steps/hate",
  },
  {
    url: "/steps/favorite",
  },
];

const Steps = () => {
  const pathname = usePathname();

  // Find the current step based on the URL
  const currentStep = STEPS.findIndex((step) => step.url === pathname);

  // Ensure minimum 1% filled for the first step
  const progressPercentage = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <div className="relative w-full">
      {/* Single label above the bar */}
      <div className="flex justify-center mb-2 text-sm font-medium">
        <h3 className="text-foreground text-xl mb-1">
          {currentStep + 1}/{STEPS.length}
        </h3>
      </div>

      {/* Progress bar container */}
      <div className="relative w-full h-2 bg-gray-300 rounded-lg">
        {/* Filled progress */}
        <div
          className="absolute top-0 left-0 h-full bg-primary rounded-lg transition-width duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Steps;
