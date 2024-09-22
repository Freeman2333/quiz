"use client";

import React, { createContext, useContext, useState } from "react";

type AppContextType = {
  gender: string;
  age: string;
  hate: string[];
  favoriteTopics: string[];
  setGender: (gender: string) => void;
  setAge: (age: string) => void;
  setHate: (hate: string[]) => void;
  setFavoriteTopics: (topics: string[]) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [hate, setHate] = useState<string[]>([]);
  const [favoriteTopics, setFavoriteTopics] = useState<string[]>([]);
  // console.log({ gender, age, hate, favoriteTopics });

  return (
    <AppContext.Provider
      value={{
        gender,
        age,
        hate,
        favoriteTopics,
        setGender,
        setAge,
        setHate,
        setFavoriteTopics,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
