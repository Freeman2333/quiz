"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import Panel from "@/components/Panel";
import { STEPS } from "@/constants"; // Adjust the import path if needed

const Page: React.FC = () => {
  const t = useTranslations("LocaleSwitcher");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handlePanelChange = (locale: string) => {
    const currentStepIndex = STEPS.findIndex(
      (step) => step.url.replace("{locale}", currentLocale) === pathname
    );

    // Get the next step index
    const nextStepIndex = currentStepIndex + 1;

    // Check if there's a next step
    if (nextStepIndex < STEPS.length) {
      const nextStep = STEPS[nextStepIndex].url.replace("{locale}", locale);
      router.replace(nextStep);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {routing.locales.map((locale: string) => (
        <Panel
          key={locale}
          label={t("locale", { locale })}
          isSelected={currentLocale === locale}
          onClick={() => handlePanelChange(locale)}
        />
      ))}
    </div>
  );
};

export default Page;
