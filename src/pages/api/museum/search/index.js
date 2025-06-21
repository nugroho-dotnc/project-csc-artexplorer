// pages/api/museums/index.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { searchQuery } = req.body;
      const museum = await prisma.museum.findMany(
        {
          where: {
            name: {
              contains: searchQuery,
            },
          },
        }
      );

      return res.status(200).json({ 
        success: true,
        message: 'Museums fetched successfully', 
        data: museum ?? [],
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch museums', 
        error: e.message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`,
    });
  }
}