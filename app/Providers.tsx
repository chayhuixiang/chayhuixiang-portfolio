"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
