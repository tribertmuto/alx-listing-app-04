import { NextApiRequest, NextApiResponse } from "next";

const reviews = {
  "1": [{ id: "r1", reviewer: "Alice", comment: "Great place!" }],
  "2": [{ id: "r2", reviewer: "Bob", comment: "Amazing villa, loved it." }],
  "3": [{ id: "r3", reviewer: "Charlie", comment: "Perfect location by the lake." }],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  res.status(200).json(reviews[id as string] || []);
}
