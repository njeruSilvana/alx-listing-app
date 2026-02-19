import type { NextApiRequest, NextApiResponse } from "next";

const mockReviews = [
  { id: 1, author: "James K.", comment: "Absolutely stunning, exceeded all expectations!", rating: 5 },
  { id: 2, author: "Sarah M.", comment: "Beautiful location, very clean. Would return.", rating: 5 },
  { id: 3, author: "David L.", comment: "Great amenities and helpful host.", rating: 4 },
  { id: 4, author: "Amina R.", comment: "Peaceful and luxurious. Perfect getaway.", rating: 5 },
  { id: 5, author: "Tom W.", comment: "Good value for the price. Overall great.", rating: 4 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(mockReviews);
}