// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Status = {
  status: "OK" | "ERROR";
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Status>
) {
  res.status(200).json({ status: "OK" });
}
