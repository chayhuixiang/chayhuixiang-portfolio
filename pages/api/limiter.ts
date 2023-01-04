import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import { getClientIp } from "request-ip";

type SimpleMap = {
  [key: string]: number
}
const reqCount: SimpleMap = {}
const REQ_LIMIT = 10;
const REQ_WINDOW = 3600000;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const ip = getClientIp(req);
  
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
    res.status(404).send({
      success: false
    });
  } else {
    res.send({
      success: true
    });
  }

}

export default handler;
