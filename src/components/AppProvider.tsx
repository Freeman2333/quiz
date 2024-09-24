"use client";

import React, { createContext, useContext, useState } from "react";

type AppContextType = {
  gender: string;
  age: string;
  hate: string[];
  favoriteTopics: string[];
  email: string;
  setGender: (gender: string) => void;
  setAge: (age: string) => void;
  setHate: (hate: string[]) => void;
  setFavoriteTopics: (topics: string[]) => void;
  setEmail: (email: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hate, setHate] = useState<string[]>([]);
  const [favoriteTopics, setFavoriteTopics] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  console.log({ email });

  return (
    <AppContext.Provider
      value={{
        gender,
        age,
        hate,
        favoriteTopics,
        email,
        setGender,
        setAge,
        setHate,
        setFavoriteTopics,
        setEmail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
