"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";

const Page: React.FC = () => {
  const t = useTranslations("LocaleSwitcher");
  const [selectedLang, setSelectedLang] = useState<string>("");
  console.log({ selectedLang });

  const handleLocaleChange = (locale: string) => {
    setSelectedLang(locale);
  };

  return (
    <div className="flex flex-col gap-4">
      {routing.locales.map((cur: string) => (
        <div
          key={cur}
          className={`w-full h-15 flex items-center pl-4 rounded-lg bg-secondary transition-colors duration-300 cursor-pointer ${
            selectedLang === cur ? "bg-primary" : ""
          } hover:bg-primary`}
          style={{ height: "60px" }}
          onClick={() => handleLocaleChange(cur)}
        >
          <span className="text-white font-semibold">
            {t("locale", { locale: cur })}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Page;
