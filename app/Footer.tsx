"use client";
import React from "react";
import Github from "@/components/images/footer/Github";
import Linkedin from "@/components/images/footer/Linkedin";

const Footer = () => {
  return (
    <footer className="shadow-top-lg relative z-20 bg-white dark:bg-indigo">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl md:py-4 py-[0.625rem] md:px-[7.5rem] m-auto gap-2">
        <div className="flex items-center">
          <p className="text-xs md:text-base">
            Chay Hui Xiang © 2024 All Rights Reserved
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/hui-xiang/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/chayhuixiang"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
