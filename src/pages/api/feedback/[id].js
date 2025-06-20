// pages/api/feedbacks/[id].js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      await prisma.feedback.delete({
        where: { idFeedback: parseInt(id) }, 
      });

      return res.status(200).json({
        success: true,
        message: "Deleted successfully",
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete feedback",
        error: e.message,
      });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`,
    });
  }
}
