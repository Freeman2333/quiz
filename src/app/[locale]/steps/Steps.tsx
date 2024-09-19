"use client";

import { STEPS } from "@/constants";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Steps: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
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
        {/* Show back button only if it's not the first step */}
        {currentStepIndex > 0 && (
          <button
            onClick={handleBackClick}
            className="absolute left-0 flex items-center p-2 bg-transparent border-none focus:outline-none"
          >
            {/* Inline SVG for Chevron Left */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-foreground mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
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
