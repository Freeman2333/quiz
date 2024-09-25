export const getLanguageLabel = (locale: string) => {
  const languageMap: { [key: string]: string } = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
  };
  return languageMap[locale] || "Unknown";
};
