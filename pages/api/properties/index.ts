import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const propertiesWithId = PROPERTYLISTINGSAMPLE.map((property, index) => ({
    ...property,
    id: index + 1,
  }));
  res.status(200).json(propertiesWithId);
}