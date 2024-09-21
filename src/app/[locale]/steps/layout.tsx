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
      <div className="flex flex-col gap-4">{children}</div>
    </>
  );
};

export default layout;
