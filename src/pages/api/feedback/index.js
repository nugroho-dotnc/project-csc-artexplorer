import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const feedbacks = await prisma.feedback.findMany();
      return res.status(200).json({
        success: true,
        message: 'List of feedback successfully loaded',
        data: feedbacks,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Failed to load feedbacks',
        error: e.message,
      });
    }
  }

  else if (req.method === 'POST') {
    try {
      const { fullName, email, subject, message } = req.body;
      if(fullName == "" || email == "" || subject == "" || message == "") {
        return res.status(403).json({
          success: false,
          message: 'Failed to send feedback, please fill all fields',
        })
      }

      const newFeedback = await prisma.feedback.create({
        data: {
          fullName,
          email,
          subject,
          message,
          date: new Date(), 
        },
      });

      return res.status(201).json({
        success: true,
        message: 'Feedback sent successfully',
        data: newFeedback,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Failed to send feedback',
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