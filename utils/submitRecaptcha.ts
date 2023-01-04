const submitRecaptcha = async (gReCaptchaToken: string, name: string, email: string, message: string, theme: string) => {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      theme,
      gReCaptchaToken,
    }),
  });
  if (!response.ok) {
    throw new Error('Oops. Something went wrong.');
  }
  const data = await response.json();
  return data;
};

export default submitRecaptcha;
