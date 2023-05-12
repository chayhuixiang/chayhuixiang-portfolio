"use client";

import React, { useState, useEffect } from "react";
import { useAnimationControls, motion } from "framer-motion";
import useMounted from "../hooks/useMounted";
import { useTheme } from "next-themes";

const Loader = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const mounted = useMounted();
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const controls = useAnimationControls();

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const sequence = async () => {
    await sleep(500);
    controls.start({ opacity: 1, transition: { duration: 0.5 } });
    await controls.start({
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.2,
      },
    });
    await sleep(100);
    await controls.start({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.2,
      },
    });
    await sleep(1000);
    setLoaded(true);
  };

  useEffect(() => {
    sequence();
  }, []);

  return (
    <div
      className={`h-[100vh] w-screen fixed bg-white dark:bg-indigo left-0 top-0 z-50 flex items-center justify-center transition-all duration-500 pointer-events-none ${
        loaded ? "opacity-0 invisible" : ""
      }`}
    >
      <motion.img
        src={
          mounted && currentTheme === "dark"
            ? "/images/about/avatar-dark.svg"
            : "/images/about/avatar.svg"
        }
        alt="avatar"
        width={150}
        animate={controls}
        className="opacity-0"
      />
    </div>
  );
};

export default Loader;
