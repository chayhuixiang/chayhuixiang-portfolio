import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import { z } from "zod";

type ReCaptChaResponse = {
  success: boolean; // whether this request was a valid reCAPTCHA token for your site
  score: number; // the score for this request (0.0 - 1.0)
  action: string; // the action name for this request (important to verify)
  challenge_ts: string; // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  hostname: string; // the hostname of the site where the reCAPTCHA was solved
  "error-codes"?: string[]; // optional
};

const ENQUIRY_SCHEMA = z.object({
  name: z.string(),
  theme: z.string(),
  email: z.string(),
  message: z.string(),
  gReCaptchaToken: z.string(),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = ENQUIRY_SCHEMA.safeParse(body);
  if (!result.success) {
    console.log(result.error);
    return NextResponse.json(
      {
        status: "failure",
        message: "Invalid request schema",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${result.data.gReCaptchaToken}`,
      {
        method: "POST",
      }
    );

    const data: ReCaptChaResponse = await response.json();
    if (data.success === false || data.score <= 0.5) {
      console.log(
        `name: ${result.data.name} | theme: ${result.data.theme} | email: ${result.data.email} | message: ${result.data.message} | score: ${data.score}`
      );
      throw new Error("Bot");
    }

    return NextResponse.json(
      {
        status: "success",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: "failure",
        message: "Error submitting the enquiry form",
      },
      {
        status: 400,
      }
    );
  }
}
