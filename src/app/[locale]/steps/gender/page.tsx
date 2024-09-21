"use client";

import { useAppContext } from "@/components/AppProvider";
import { useTranslations } from "next-intl";
import { useStepNavigation } from "@/hook/useStepNavigation";

const Page: React.FC = () => {
  const t = useTranslations();
  const { setGender } = useAppContext()!;
  const { goToNextStep } = useStepNavigation();

  const handleGenderSelect = (gender: string) => {
    setGender(gender);
    goToNextStep();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-foreground">
        {t("title2")}
      </h1>
      <p className="text-lg text-center text-muted mb-5">{t("subtitle2")}</p>

      <div className="flex justify-between gap-6 w-full">
        <div
          onClick={() => handleGenderSelect(t("genderFemale"))}
          className={`flex-1 h-48 flex items-center justify-start pl-8 rounded-lg bg-secondary transition-colors duration-300 cursor-pointer hover:bg-primary`}
        >
          <span className="text-6xl">👩</span>
          <p className="text-2xl text-white font-semibold ml-6">
            {t("genderFemale")}
          </p>
        </div>

        <div
          onClick={() => handleGenderSelect(t("genderMale"))}
          className={`flex-1 h-48 flex items-center justify-start pl-8 rounded-lg bg-secondary transition-colors duration-300 cursor-pointer hover:bg-primary`}
        >
          <span className="text-6xl">👨</span>
          <p className="text-2xl text-white font-semibold ml-6">
            {t("genderMale")}
          </p>
        </div>

        <div
          onClick={() => handleGenderSelect(t("genderOther"))}
          className={`flex-1 h-48 flex items-center justify-start pl-8 rounded-lg bg-secondary transition-colors duration-300 cursor-pointer hover:bg-primary`}
        >
          <span className="text-6xl">😉</span>
          <p className="text-2xl text-white font-semibold ml-6">
            {t("genderOther")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
