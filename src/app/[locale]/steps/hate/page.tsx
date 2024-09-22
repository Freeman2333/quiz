"use client";

import { useTranslations } from "next-intl";
import { useAppContext } from "@/components/AppProvider";
import { useStepNavigation } from "@/hook/useStepNavigation";
import CheckboxPanel from "@/components/CheckboxPanel";
import Button from "@/components/Button";

const Page: React.FC = () => {
  const t = useTranslations();
  const { hate, setHate } = useAppContext()!;
  const { goToNextStep } = useStepNavigation();
  const hateOptions = [t("hate1"), t("hate2"), t("hate3"), t("hate4")];

  const handleToggle = (option: string) => {
    const updatedHate = hate.includes(option)
      ? hate.filter((item) => item !== option)
      : [...hate, option];
    setHate(updatedHate);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-foreground mb-5">
        {t("title4")}
      </h1>
      <div className="flex flex-col gap-4">
        {hateOptions.map((option) => (
          <CheckboxPanel
            key={option}
            label={option}
            isChecked={hate.includes(option)}
            onToggle={() => handleToggle(option)}
          />
        ))}
      </div>
      <Button onClick={goToNextStep} disabled={hate.length === 0}>
        {t("next")}
      </Button>
    </>
  );
};

export default Page;
