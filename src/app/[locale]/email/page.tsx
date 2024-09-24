"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import Button from "@/components/Button";
import { useNavigateToUrl } from "@/hook/useAppNavigation";
import InputField from "@/components/Input";
import { useAppContext } from "@/components/AppProvider";

const Page: React.FC = () => {
  const t = useTranslations();
  const [localEmail, setLocalEmail] = useState("");
  const { setEmail } = useAppContext()!;
  const [isEmailValid, setIsEmailValid] = useState(false);
  const handleNext = useNavigateToUrl();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const handleSubmit = () => {
    setEmail(localEmail);
    handleNext(`/thank-you`);
  };

  return (
    <div className="flex flex-col items-center pt-[100px] h-full">
      <h1 className="text-3xl font-bold text-center text-foreground mb-5">
        {t("email")}
      </h1>
      <p className="text-lg text-center text-muted mb-5">{t("emailTitle")}</p>
      <div className="my-[50px] w-full">
        <InputField
          value={localEmail}
          onChange={handleEmailChange}
          placeholder={t("inputLabel")}
          type="email"
        />
      </div>
      <p className="text-center">
        {t("termsLabel1")}{" "}
        <a href="/privacy-policy" className="text-primary">
          {t("termsLabel2")}
        </a>{" "}
        {t("termsLabel3")}{" "}
        <a href="/terms-of-use" className="text-primary">
          {t("termsLabel4")}
        </a>
      </p>

      <Button
        className="w-full mt-auto"
        onClick={handleSubmit}
        disabled={!isEmailValid}
      >
        {t("next")}
      </Button>
    </div>
  );
};

export default Page;
