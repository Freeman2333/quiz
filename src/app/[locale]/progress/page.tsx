"use client";

import { useTranslations } from "next-intl";
import ProgressCircle from "./ProgressCircle";
import { useNavigateToUrl } from "@/hook/useAppNavigation";

const Progress: React.FC = () => {
  const t = useTranslations();
  const handleNext = useNavigateToUrl();

  const handleComplete = () => {
    handleNext(`/email`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <ProgressCircle onComplete={handleComplete} />
      <p className="mt-6 text-center text-2xl text-muted">
        {t("subtitleLoading")}
      </p>
    </div>
  );
};

export default Progress;
