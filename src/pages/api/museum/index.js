// pages/api/museums/index.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const museums = await prisma.museum.findMany({
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
  }

  else if (req.method === 'POST') {
    try {
      const { name, description, location, imageUrl, isRecomended,  ticketPrice} = req.body;
      if(name == null || description == null || location == null || imageUrl == null){
        return res.status(400).json(
          {
            success: false,
            message: 'field name or description or location or image is required',
          }
        )
      }
      
      const newMuseum = await prisma.museum.create({
        data: {
          name,
          description,
          location,
          imageUrl,
          isRecomended,
          ticketPrice,
        },
      });

      return res.status(201).json({
        success: true,
        message: 'Museum created successfully',
        data: newMuseum,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Failed to create museum',
        error: e.message,
      });
    }
  }

  else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`,
    });
  }
}
