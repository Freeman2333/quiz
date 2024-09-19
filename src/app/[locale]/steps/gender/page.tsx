"use client";

import { useAppContext } from "@/components/AppProvider";
import React from "react";

const Page: React.FC = () => {
  const appContext = useAppContext();
  console.log({ appContext });

  return <div>Page</div>;
};

export default Page;
