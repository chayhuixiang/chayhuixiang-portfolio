"use client";

import React from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <ReCaptchaProvider>{children}</ReCaptchaProvider>;
};

export default Providers;
