"use client";

import { useTranslations } from "next-intl";

import { useAppContext } from "@/components/AppProvider";
import Button from "@/components/Button";
import { topics } from "./constants";
import { useNavigateToUrl } from "@/hook/useAppNavigation";

const Page: React.FC = () => {
  const t = useTranslations();
  const { favoriteTopics, setFavoriteTopics } = useAppContext()!;

  const handleNext = useNavigateToUrl();

  const handleToggle: (topic: string) => void = (topic) => {
    const updatedTopics = favoriteTopics.includes(topic)
      ? favoriteTopics.filter((item) => item !== topic)
      : [...favoriteTopics, topic];

    setFavoriteTopics(updatedTopics);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-foreground mb-5">
        {t("title5")}
      </h1>
      <p className="text-lg text-center text-muted mb-5">{t("subtitle5")}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-4 mb-7">
        {topics.map(({ key, emoji }) => (
          <div
            key={key}
            onClick={() => handleToggle(key)}
            className={`w-24 h-24 flex items-center justify-center rounded-full border-2 hover:bg-secondaryLight hover:border-primary cursor-pointer transition-colors duration-300 ${
              favoriteTopics.includes(key)
                ? "bg-secondaryLight border-primary"
                : "bg-secondary border-transparent"
            }`}
          >
            <span className="text-white text-3xl">{emoji}</span>
          </div>
        ))}
      </div>
      <Button width="100%" onClick={() => handleNext(`/progress`)}>
        {t("next")}
      </Button>
    </div>
  );
};

export default Page;
