"use client";

import { useTranslations } from "next-intl";
import { useAppContext } from "@/components/AppProvider";
import Panel from "@/components/Panel";
import { useStepNavigation } from "@/hook/useAppNavigation";

const Page: React.FC = () => {
  const t = useTranslations();
  const { setAge } = useAppContext()!;
  const { goToNextStep } = useStepNavigation();

  const ageRanges = [t("years1"), t("years2"), t("years3"), t("years4")];

  const handlePanelChange = (age: string) => {
    setAge(age);
    goToNextStep();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-foreground mb-5">
        {t("title3")}
      </h1>
      <div className="flex flex-col gap-4">
        {ageRanges.map((age) => (
          <Panel
            key={age}
            label={age}
            isSelected={false}
            onClick={() => handlePanelChange(age)}
          />
        ))}
      </div>
    </>
  );
};

export default Page;
