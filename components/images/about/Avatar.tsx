"use client";

import React from "react";
import { useTheme } from "next-themes";
import useMounted from "../../../lib/hooks/useMounted";

type Props = {
  className?: string;
};

const Avatar = ({ className }: Props) => {
  const mounted = useMounted();
  // dark mode
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) {
    return null;
  }

  return (
    <img
      src={
        currentTheme === "dark"
          ? "/images/about/avatar-dark.svg"
          : "/images/about/avatar.svg"
      }
      alt="avatar"
      className={className}
    />
  );
};

export default Avatar;
