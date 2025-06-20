import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const events = await prisma.events.findMany();

      return res.status(200).json({
        success: true,
        message: 'Daftar event berhasil dimuat.',
        data: events,
      });
    } catch (e) {
      console.error("GET Events API Error:", e);
      return res.status(500).json({
        success: false,
        message: 'Gagal memuat daftar event.',
        error: e.message,
      });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, description, startDate, endDate, museumId, imageUrl } = req.body;

      if (!title || !description || !startDate || !endDate || !museumId || !imageUrl) {
        return res.status(400).json({ 
          success: false,
          message: 'Gagal membuat event. Semua kolom (title, description, startDate, endDate, museumId, imageUrl) wajib diisi.',
        });
      }

      const parsedMuseumId = parseInt(museumId);
      if (isNaN(parsedMuseumId)) {
        return res.status(400).json({
          success: false,
          message: 'ID Museum tidak valid.',
        });
      }

      const parsedStartDate = new Date(startDate);
      const parsedEndDate = new Date(endDate);

      if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
        return res.status(400).json({
          success: false,
          message: 'Format tanggal (startDate atau endDate) tidak valid.',
        });
      }

      const newEvent = await prisma.events.create({
        data: {
          title,
          description,
          startDate: parsedStartDate,
          endDate: parsedEndDate,
          museumId: parsedMuseumId,
          imageUrl: imageUrl, 
        },
      });

      return res.status(201).json({
        success: true,
        message: 'Event berhasil dibuat.',
        data: newEvent,
      });
    } catch (e) {
      console.error("POST Events API Error:", e);

      if (e.code === 'P2002') {
        return res.status(409).json({
          success: false,
          message: 'Museum ini sudah memiliki event yang terkait. Setiap museum hanya bisa memiliki satu event unik.',
          error: e.message,
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Gagal membuat event.',
        error: e.message,
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({
      success: false,
      message: `Metode ${req.method} Tidak Diizinkan`,
    });
  }
}