// pages/api/museums/index.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const museums = await prisma.museum.findMany({
        where:{
            rate:{
                gt: 4.5,
            }
        },
        include: { artGallery: true },
      });
      return res.status(200).json({
        success: true,
        message: 'List of museums successfully loaded',
        data: museums,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Failed to load museums',
        error: e.message,
      });
    }
  }else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`,
    });
  }
}
