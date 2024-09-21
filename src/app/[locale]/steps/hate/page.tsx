"use client";

import { useAppContext } from "@/components/AppProvider";

const Page: React.FC = () => {
  const cont = useAppContext()!;
  console.log({ cont });

  return <div>Page</div>;
};

export default Page;
