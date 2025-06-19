// pages/api/museums/[id].js
import { PrismaClient } from "@prisma/client";
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  const idInt = parseInt(id);
  if (isNaN(idInt)) {
    return res.status(400).json({ success: false, message: "Invalid ID" });
  }

  switch (req.method) {

    case 'GET':
      try {
        const museum = await prisma.museum.findUnique({
          where: { id_museum: idInt },
          include: { artGallery: true },
        });

        if (!museum) {
          return res.status(404).json({ success: false, message: 'Museum not found' });
        }

        return res.status(200).json({
          success: true,
          message: 'Museum successfully loaded',
          data: museum,
        });
      } catch (e) {
        return res.status(500).json({
          success: false,
          message: 'Failed to get museum details',
          error: e.message,
        });
      }

    case 'PUT':
      try {
        const body = req.body || (await parseBody(req));
        const { name, description, location, image } = body;
        const findMuseum = await prisma.museum.findFirst({where: {idMuseum: idInt}})
        
         if (image) {
          const absolutePath = path.resolve('./public/', findMuseum.imageUrl);
          await fs.rm(absolutePath, { force: true });
        }

        const updated = await prisma.museum.update({
          where: { id_museum: idInt },
          data: { name, description, location, image },
        });
        
       
        return res.status(200).json({ success: true, data: updated });
      } catch (e) {
        return res.status(500).json({
          success: false,
          message: 'Failed to update museum',
          error: e.message,
        });
      }

    case 'DELETE':
      try {
        const museum = await prisma.museum.findUnique({
          where: { id_museum: idInt },
        });

        if (!museum) {
          return res.status(404).json({ success: false, message: 'Museum not found' });
        }

        // Hapus file gambar jika ada
        if (museum.imageUrl) {
          const absolutePath = path.resolve('./public/', museum.imageUrl);
          await fs.rm(absolutePath, { force: true });
        }

        await prisma.museum.delete({
          where: { id_museum: idInt },
        });

        return res.status(200).json({ success: true, message: 'Deleted successfully' });
      } catch (e) {
        return res.status(500).json({
          success: false,
          message: 'Failed to delete museum',
          error: e.message,
        });
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({
        success: false,
        message: `Method ${req.method} Not Allowed`,
      });
  }
}

async function parseBody(req) {
  const buffers = [];
  for await (const chunk of req) {
    buffers.push(chunk);
  }
  const data = Buffer.concat(buffers).toString();
  return JSON.parse(data);
}
