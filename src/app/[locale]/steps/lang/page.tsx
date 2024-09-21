"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import Panel from "@/components/Panel";
import { STEPS } from "@/constants";

const Page: React.FC = () => {
  const tRoot = useTranslations();
  const tLocaleSwitcher = useTranslations("LocaleSwitcher");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handlePanelChange = (locale: string) => {
    const currentStepIndex = STEPS.findIndex(
      (step) => step.url.replace("{locale}", currentLocale) === pathname
    );

    const nextStepIndex = currentStepIndex + 1;

    if (nextStepIndex < STEPS.length) {
      const nextStep = STEPS[nextStepIndex].url.replace("{locale}", locale);
      router.replace(nextStep);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-foreground">
        {tRoot("title1")}
      </h1>
      <p className="text-lg text-center text-muted mb-5">
        {tRoot("subtitle1")}
      </p>

      {routing.locales.map((locale: string) => (
        <Panel
          key={locale}
          label={tLocaleSwitcher("locale", { locale })}
          isSelected={currentLocale === locale}
          onClick={() => handlePanelChange(locale)}
        />
      ))}
    </>
  );
};

export default Page;
