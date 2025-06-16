import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const feedbacks = await prisma.artGallery.findMany(
        {
            include: {museum: true}
        }
      );
      return res.status(200).json({
        success: true,
        message: 'List of art gallery successfully loaded',
        data: feedbacks,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Failed to load art gallery',
        error: e.message,
      });
    }
  }

  else if (req.method === 'POST') {
    try {
      const { museum_id, image_url, title, description } = req.body;

      const newFeedback = await prisma.artGallery.create({
        data: {
          title: title,
          description: description,
          image_url: image_url,
          museumId: museum_id
        },
      });

      return res.status(201).json({
        success: true,
        message: 'Art gallery successfully created',
        data: newFeedback,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Failed to create art gallery',
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