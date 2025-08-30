import { NextApiRequest, NextApiResponse } from "next";

const properties = [
  { id: "1", title: "Cozy Apartment", location: "Kigali", description: "A cozy place in the city center", price: 50 },
  { id: "2", title: "Modern Villa", location: "Musanze", description: "Luxury villa with mountain views", price: 120 },
  { id: "3", title: "Beach House", location: "Rubavu", description: "Enjoy the lake breeze", price: 200 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = properties.find((p) => p.id === id);
  if (property) {
    res.status(200).json(property);
  } else {
    res.status(404).json({ message: "Property not found" });
  }
}
