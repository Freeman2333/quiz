"use client";

import Icons from "@/icons";
import { useLocale, useTranslations } from "next-intl";
import { useAppContext } from "@/components/AppProvider";
import Button from "@/components/Button";
import { useNavigateToUrl } from "@/hook/useAppNavigation";
import { getLanguageLabel } from "@/app/utils/localeUtils";
import { generateCSV } from "@/app/utils/csvUtils";

const Page: React.FC = () => {
  const t = useTranslations();
  const currentLocale = useLocale();
  const { gender, age, hate, favoriteTopics, email } = useAppContext()!;
  const handleNext = useNavigateToUrl();

  const handleGenerateCSV = () => {
    const header = [t("order"), t("title"), t("type"), t("answer")];
    const data = [
      [1, t("title1"), t("singleSelect"), getLanguageLabel(currentLocale)],
      [2, t("title2"), t("singleSelect"), gender],
      [3, t("title3"), t("singleSelect"), age],
      [4, t("title4"), t("multipleSelect"), `"${hate.join(", ")}"`],
      [5, t("title5"), t("multipleSelect"), `"${favoriteTopics.join(", ")}"`],
      [6, t("email"), t("bubble"), email],
    ];
    generateCSV(header, data, "answers.csv");
  };

  const handleRetakeQuiz = () => {
    handleNext("/");
  };

  return (
    <div className="flex flex-col items-center justify-center pt-5 h-full">
      <h1 className="text-3xl font-bold text-center text-foreground mb-1">
        {t("thankYou")}
      </h1>
      <p className="text-lg text-center text-muted mb-5">{t("quizThank")}</p>
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="flex items-center justify-center w-20 h-20 bg-green-200 rounded-full">
          <Icons.GreenCheckmark />
        </div>
      </div>
      <a
        onClick={handleGenerateCSV}
        className="flex items-center mb-3 cursor-pointer"
      >
        <Icons.DownloadIcon className="mr-2" /> {t("download")}
      </a>
      <Button onClick={handleRetakeQuiz} className="w-full">
        {t("retakeQuiz")}
      </Button>
    </div>
  );
};

export default Page;
