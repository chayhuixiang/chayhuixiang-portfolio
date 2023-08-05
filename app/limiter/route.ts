import { NextResponse } from "next/server";
// @ts-ignore
import { getClientIp } from "request-ip";

type SimpleMap = {
  [key: string]: number;
};
const reqCount: SimpleMap = {};
const REQ_LIMIT = 10;
const REQ_WINDOW = 3600000;

export async function GET(req: Request) {
  const ip = getClientIp(req);

  if (ip === null)
    return NextResponse.json(
      { success: true, isVerified: false },
      { status: 200 }
    );

  if (ip in reqCount) {
    reqCount[ip] += 1;
  } else {
    reqCount[ip] = 1;
  }

  setTimeout(() => {
    reqCount[ip] -= 1;
  }, REQ_WINDOW);

  if (reqCount[ip] >= REQ_LIMIT) {
    console.log(ip);
    return NextResponse.json({ success: false }, { status: 404 });
  } else {
    return NextResponse.json(
      { success: true, isVerified: true },
      { status: 200 }
    );
  }
}
