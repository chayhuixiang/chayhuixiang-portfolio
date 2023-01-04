import { NextApiRequest, NextApiResponse } from "next";

type ReCaptChaResponse = {
  success: boolean,      // whether this request was a valid reCAPTCHA token for your site
  score: number             // the score for this request (0.0 - 1.0)
  action: string            // the action name for this request (important to verify)
  challenge_ts: string,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  hostname: string,         // the hostname of the site where the reCAPTCHA was solved
  "error-codes"?: string[]        // optional
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.gReCaptchaToken}`, {
        method: "POST",
      });

      const data: ReCaptChaResponse = await response.json();
      if (data.success === false || data.score <= 0.5) {
        console.log(`name: ${req.body.name} | theme: ${req.body.theme} | email: ${req.body.email} | message: ${req.body.message} | score: ${data.score}`);
        throw new Error("Bot");
      }
      res.status(200).json({
        status: "success"
      })
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  } else {
    res.status(405);
    res.end();
  }
};

export default handler;
