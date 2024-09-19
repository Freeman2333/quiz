"use client";
import { createContext, useContext } from "react";

type AppContextType = {
  language: string;
  gender: string;
  age: number;
  hate: string[];
  favoriteTopics: string[];
};

const defaultAppContext: AppContextType = {
  language: "en",
  gender: "unspecified",
  age: 0,
  hate: [],
  favoriteTopics: [],
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppContext.Provider value={defaultAppContext}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
