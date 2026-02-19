import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const index = Number(id) - 1;
  const property = PROPERTYLISTINGSAMPLE[index];

  if (!property) return res.status(404).json({ message: "Property not found" });

  res.status(200).json({ ...property, id: Number(id) });
}