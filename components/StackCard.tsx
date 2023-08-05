"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import useMounted from "../lib/hooks/useMounted";

type Props = {
  name: string;
  logo_path_light: string;
  logo_path_dark: string;
  colour: string;
};

const StackCard = ({
  name,
  logo_path_light,
  logo_path_dark,
  colour,
}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const mounted = useMounted();
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <motion.div
      className="m-auto h-[5.5rem] w-[5.5rem] flex justify-center items-center flex-col gap-2 rounded-xl transition-all duration-200 cursor-default"
      style={{ backgroundColor: `${colour}${hovered ? "44" : "33"}` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <img
        src={
          mounted && currentTheme === "dark" ? logo_path_dark : logo_path_light
        }
        alt="stack_logo"
      />
      <p className="font-secondary text-xs">{name}</p>
    </motion.div>
  );
};

export default StackCard;
