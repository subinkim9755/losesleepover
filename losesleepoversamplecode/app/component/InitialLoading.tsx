"use client";

import { useEffect, useState } from "react";
import LoadingBar from "./LoadingBar";

const MINIMUM_LOADING_TIME = 1000;

export default function InitialLoading({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsReady(true);
    }, MINIMUM_LOADING_TIME);

    return () => window.clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f5f5f5]">
        <LoadingBar />
      </div>
    );
  }

  return children;
}
