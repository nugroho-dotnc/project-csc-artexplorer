import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query; 
  const idInt = parseInt(id); 

  if (isNaN(idInt)) {
    return res.status(400).json({ success: false, message: "ID Event tidak valid." });
  }

  switch (req.method) {
    case 'PUT':
      try {
        const { title, description, startDate, endDate, museumId, imageUrl } = req.body;

        if (!title || !description || !startDate || !endDate || !museumId || !imageUrl) {
          return res.status(400).json({
            success: false,
            message: 'Gagal memperbarui event. Semua kolom (title, description, startDate, endDate, museumId, imageUrl) wajib diisi.',
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

        const existingEvent = await prisma.events.findUnique({
          where: { id: idInt },
        });

        if (!existingEvent) {
          return res.status(404).json({ success: false, message: 'Event tidak ditemukan untuk diperbarui.' });
        }

         if (imageUrl && existingEvent.imageUrl && imageUrl !== existingEvent.imageUrl) {
              try {
                    const oldAbsolutePath = path.join(process.cwd(), 'public', existingEvent.imageUrl);
                    console.log(`Mencoba menghapus gambar lama: ${oldAbsolutePath}`); 
                    await fs.unlink(oldAbsolutePath, { force: true });
                    console.log(`Berhasil menghapus gambar lama: ${oldAbsolutePath}`);
              } catch (fileDeleteError) {
                    console.error(`[PUT] Gagal menghapus gambar lama ${existingEvent.imageUrl}:`, fileDeleteError);
                                // return res.status(500).json({
                                //     success: false,
                                //     message: `Gagal menghapus gambar lama museum. Error: ${fileDeleteError.message}`,
                                //     error: fileDeleteError.message,
                                //     filePathAttempted: existingMuseum.imageUrl
                                // });
                    }
              }

        const updatedEvent = await prisma.events.update({
          where: { id: idInt },
          data: {
            title,
            description,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
            museumId: parsedMuseumId,
            imageUrl,
          },
        });

        return res.status(200).json({
          success: true,
          message: 'Event berhasil diperbarui.',
          data: updatedEvent,
        });
      } catch (e) {
        console.error("PUT Event API Error:", e);

        if (e.code === 'P2002') {
          return res.status(409).json({
            success: false,
            message: 'Museum ini sudah memiliki event lain yang terkait. Setiap museum hanya bisa memiliki satu event unik.',
            error: e.message,
          });
        }

        return res.status(500).json({
          success: false,
          message: 'Gagal memperbarui event.',
          error: e.message,
        });
      }

    case 'DELETE':
      try {
        const existingEvent = await prisma.events.findUnique({
          where: { id: idInt },
        });

        if (!existingEvent) {
          return res.status(404).json({ success: false, message: 'Event tidak ditemukan untuk dihapus.' });
        }

        if (existingEvent.imageUrl) {
            try {
                const absolutePath = path.join(process.cwd(), 'public', existingEvent.imageUrl);
                await fs.unlink(absolutePath, { force: true });
                console.log(`Successfully deleted image file: ${absolutePath}`);
            } catch (fileDeleteError) {
                console.error(`Failed to delete image file ${existingEvent.imageUrl}:`, fileDeleteError);
                               
            }
        }

        await prisma.events.delete({
          where: { id: idInt },
        });

        return res.status(200).json({ success: true, message: 'Event berhasil dihapus.' });
      } catch (e) {
        console.error("DELETE Event API Error:", e);
        return res.status(500).json({
          success: false,
          message: 'Gagal menghapus event.',
          error: e.message,
        });
      }

    case 'GET': 
        try {
            const event = await prisma.events.findUnique({
                where: { id: idInt },
                include: { museum: true }, 
            });

            if (!event) {
                return res.status(404).json({ success: false, message: 'Event tidak ditemukan.' });
            }

            return res.status(200).json({
                success: true,
                message: 'Detail event berhasil dimuat.',
                data: event,
            });
        } catch (e) {
            console.error("GET Single Event API Error:", e);
            return res.status(500).json({
                success: false,
                message: 'Gagal memuat detail event.',
                error: e.message,
            });
        }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({
        success: false,
        message: `Metode ${req.method} Tidak Diizinkan`,
      });
  }
}