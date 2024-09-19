"use client";

import { STEPS } from "@/constants";
import { usePathname } from "next/navigation";

const Steps: React.FC = () => {
  const pathname = usePathname();
  const [locale] = pathname.split("/").filter(Boolean);

  const localizedSteps = STEPS.map((step) => ({
    ...step,
    url: step.url.replace("{locale}", locale),
  }));

  const currentStepIndex = localizedSteps.findIndex(
    (step) => step.url === pathname
  );
  const progressPercentage =
    ((currentStepIndex + 1) / localizedSteps.length) * 100;

  return (
    <div className="relative w-full mb-20">
      <div className="flex justify-center mb-2 text-sm font-medium">
        <h3 className="text-foreground text-xl mb-1">
          {currentStepIndex + 1}/{localizedSteps.length}
        </h3>
      </div>

      <div className="relative w-full h-2 bg-gray-300 rounded-lg">
        {localizedSteps.map((step, index) => (
          <div
            key={step.url}
            className={`absolute top-0 h-full ${
              index <= currentStepIndex ? "text-primary" : "text-foreground"
            } rounded-lg transition-width duration-300 ease-in-out`}
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
