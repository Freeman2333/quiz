"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { STEPS } from "@/constants";
import Icons from "@/icons";

const Steps: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [locale] = pathname.split("/").filter(Boolean);
  const [progressPercentage, setProgressPercentage] = useState(0);

  const localizedSteps = STEPS.map((step) => ({
    ...step,
    url: step.url.replace("{locale}", locale),
  }));

  const currentStepIndex = localizedSteps.findIndex(
    (step) => step.url === pathname
  );

  useEffect(() => {
    const newProgressPercentage =
      ((currentStepIndex + 1) / localizedSteps.length) * 100;
    setProgressPercentage(newProgressPercentage);
  }, [currentStepIndex, localizedSteps.length]);

  // Handler for the back button
  const handleBackClick = () => {
    const previousStepIndex = currentStepIndex - 1;

    if (previousStepIndex >= 0) {
      const previousStepUrl = localizedSteps[previousStepIndex].url;
      router.replace(previousStepUrl);
    }
  };

  return (
    <div className="relative w-full mb-20">
      <div className="flex justify-center mb-2 text-sm font-medium relative">
        {currentStepIndex > 0 && (
          <button
            onClick={handleBackClick}
            className="absolute left-0 flex items-center p-2 bg-transparent border-none focus:outline-none"
          >
            {Icons.ChevronLeft}
          </button>
        )}

        {/* Step Indicator */}
        <h3 className="text-foreground text-xl mb-1">
          <span className="text-primary">{currentStepIndex + 1}</span>/
          {localizedSteps.length}
        </h3>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-300 rounded-lg">
        {localizedSteps.map((step, index) => (
          <div
            key={step.url}
            className={`absolute top-0 h-full rounded-lg transition-width duration-300 ease-in-out`}
            style={{
              left: `${(index / localizedSteps.length) * 100}%`,
              width: `${100 / localizedSteps.length}%`,
            }}
          ></div>
        ))}

        <div
          className="absolute top-0 left-0 h-full bg-primary rounded-lg transition-width duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Steps;
