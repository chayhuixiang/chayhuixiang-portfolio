"use client";

import React from "react";
import { useTheme } from "next-themes";
import Button from "./Button";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import useMounted from "@/lib/hooks/useMounted";

type Props = {
  className?: string;
};

const DarkModeButton = ({ className }: Props) => {
  // dark mode button
  const mounted = useMounted();
  const { systemTheme, theme, setTheme } = useTheme();

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <Button
        onClick={() => {
          setTheme("light");
        }}
        type="outline"
        colour="blue-dark"
        className={className}
      >
        <SunIcon className="w-6 h-6" />
      </Button>
    );
  } else {
    return (
      <Button
        onClick={() => {
          setTheme("dark");
        }}
        type="outline"
        colour="blue-dark"
        className={className}
      >
        <MoonIcon className="w-6 h-6" />
      </Button>
    );
  }
};

export default DarkModeButton;
