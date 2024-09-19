import React from "react";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Page: React.FC = () => {
  const t = useTranslations();

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
