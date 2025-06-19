// pages/api/feedbacks/[id].js
import { PrismaClient } from "@prisma/client";
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const deleted = await prisma.artGallery.delete({
        where: { id: parseInt(id) }, 
      });
       if (deleted.imageUrl) {
                const absolutePath = path.resolve('./public/', deleted.imageUrl);
                await fs.rm(absolutePath, { force: true });
          }         
      return res.status(200).json({
        success: true,
        message: "Deleted successfully",
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete art gallery!",
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
