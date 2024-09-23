"use client";

import { useRouter, usePathname } from "next/navigation";
import { STEPS } from "@/constants";
import { useLocale } from "next-intl";

export const useStepNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const goToNextStep = () => {
    const currentStepIndex = STEPS.findIndex(
      (step) => step.url.replace("{locale}", currentLocale) === pathname
    );

    const nextStepIndex = currentStepIndex + 1;

    if (nextStepIndex < STEPS.length) {
      const nextStepUrl = STEPS[nextStepIndex].url.replace(
        "{locale}",
        currentLocale
      );
      router.push(nextStepUrl);
    }
  };

  return { goToNextStep };
};

export const useNavigateToUrl = () => {
  const router = useRouter();
  const currentLocale = useLocale();

  const handleNext = (url: string) => {
    const nextPageWithLocale = `/${currentLocale}${url}`;
    router.push(nextPageWithLocale);
  };

  return handleNext;
};
