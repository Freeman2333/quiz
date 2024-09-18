import React from "react";
import Steps from "./Steps";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Steps />
      {children}
    </>
  );
};

export default layout;
