import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const booking = req.body;
    console.log("New booking:", booking);
    res.status(201).json({ message: "Booking confirmed" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
