import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const bookingData = req.body;
    console.log("Booking received:", bookingData);
    res.status(201).json({ message: "Booking confirmed!", data: bookingData });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}