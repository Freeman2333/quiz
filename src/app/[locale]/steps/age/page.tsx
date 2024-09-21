"use client";

import React from "react";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useAppContext } from "@/components/AppProvider";

const Page: React.FC = () => {
  const t = useTranslations();
  const { language, gender, age, hate, favoriteTopics } = useAppContext()!;
  console.log({ language, gender, age, hate, favoriteTopics });

  return (
    <div>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </div>
  );
};

export default Page;
