"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /steps/lang immediately after the component mounts
    router.push("/steps/lang");
  }, [router]);

  return <main></main>;
}
