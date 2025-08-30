import { NextApiRequest, NextApiResponse } from "next";

const properties = [
  { id: "1", title: "Cozy Apartment", location: "Kigali", price: 50, image: "/images/house1.jpg" },
  { id: "2", title: "Modern Villa", location: "Musanze", price: 120, image: "/images/house2.jpg" },
  { id: "3", title: "Beach House", location: "Rubavu", price: 200, image: "/images/house3.jpg" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(properties);
}
