"use client";

import React from "react";

const ImageGroup = () => {
  return (
    <>
      <img
        src="/images/about/about-cover-1.svg"
        alt="cover-1"
        className="absolute border-4 border-gunmetal dark:border-white rounded-3xl sm:-rotate-2 left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:left-0 -rotate-6 hover:scale-105 transition-all duration-200 w-60 sm:w-auto"
      />
      <img
        src="/images/about/about-cover-3.svg"
        alt="cover-3"
        width="420"
        className="absolute border-4 border-gunmetal dark:border-white rounded-3xl -rotate-3 hover:scale-105 transition-all duration-200 right-0 top-10 hidden lg:block"
      />
      <img
        src="/images/about/about-cover-2.svg"
        alt="cover-2"
        width="388"
        className="absolute border-4 border-gunmetal dark:border-white rounded-3xl rotate-6 hover:scale-105 transition-all duration-200 top-10 lg:left-1/2 lg:-translate-x-1/2 md:right-16 hidden md:block"
      />
    </>
  );
};

export default ImageGroup;
