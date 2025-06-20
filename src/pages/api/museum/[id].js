// pages/api/museums/[id].js
import { PrismaClient } from "@prisma/client";
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;
    const idInt = parseInt(id);

    if (isNaN(idInt)) {
        return res.status(400).json({ success: false, message: "Invalid ID provided." });
    }

    switch (req.method) {
        case 'GET':
            try {
                const museum = await prisma.museum.findUnique({
                    where: { idMuseum: idInt }, // Assuming 'idMuseum' is the correct field in your Prisma schema
                    include: { artGallery: true },
                });

                if (!museum) {
                    return res.status(404).json({ success: false, message: 'Museum not found.' });
                }

                return res.status(200).json({
                    success: true,
                    message: 'Museum successfully loaded.',
                    data: museum,
                    artGallery: museum.artGallery || [] 
                });
            } catch (e) {
                console.error("GET Museum API Error:", e);
                return res.status(500).json({
                    success: false,
                    message: 'Failed to get museum details.',
                    error: e.message,
                });
            }

        case 'PUT':
            try {
                const { name, description, location, imageUrl, isRecomended, ticketPrice } = req.body; 
                if (!name || !description || !location || !imageUrl ) {
                    return res.status(400).json({
                        success: false,
                        message: 'All fields (name, description, location, imageUrl, isRecomended, ticketPrice) are required.',
                    });
                }

                const existingMuseum = await prisma.museum.findUnique({
                    where: { idMuseum: idInt } 
                });

                if (!existingMuseum) {
                    return res.status(404).json({ success: false, message: 'Museum not found for update.' });
                }

                if (imageUrl && existingMuseum.imageUrl && imageUrl !== existingMuseum.imageUrl) {
                    try {
                        const oldAbsolutePath = path.join(process.cwd(), 'public', existingMuseum.imageUrl);
                        console.log(`Mencoba menghapus gambar lama: ${oldAbsolutePath}`); 
                        await fs.unlink(oldAbsolutePath, { force: true });
                        console.log(`Berhasil menghapus gambar lama: ${oldAbsolutePath}`);
                    } catch (fileDeleteError) {
                        console.error(`[PUT] Gagal menghapus gambar lama ${existingMuseum.imageUrl}:`, fileDeleteError);
                        // return res.status(500).json({
                        //     success: false,
                        //     message: `Gagal menghapus gambar lama museum. Error: ${fileDeleteError.message}`,
                        //     error: fileDeleteError.message,
                        //     filePathAttempted: existingMuseum.imageUrl
                        // });
                    }
                }

                const updatedMuseum = await prisma.museum.update({
                    where: { idMuseum: idInt }, 
                    data: {
                        name,
                        description,
                        location,
                        imageUrl, 
                        isRecomended, 
                        ticketPrice,
                    },
                });

                return res.status(200).json({
                    success: true,
                    message: 'Museum updated successfully.',
                    data: updatedMuseum,
                });
            } catch (e) {
                console.error("PUT Museum API Error:", e);
                if (e.code === 'P2002') {
                    return res.status(409).json({
                        success: false,
                        message: 'A museum with the same unique identifier already exists.',
                        error: e.message,
                    });
                }
                return res.status(500).json({
                    success: false,
                    message: 'Failed to update museum.',
                    error: e.message,
                });
            }

        case 'DELETE':
            try {
                const museum = await prisma.museum.findUnique({
                    where: { idMuseum: idInt }, 
                });

                if (!museum) {
                    return res.status(404).json({ success: false, message: 'Museum not found.' });
                }

                if (museum.imageUrl) {
                    try {
                        const absolutePath = path.join(process.cwd(), 'public', museum.imageUrl);
                        await fs.unlink(absolutePath, { force: true });
                        console.log(`Successfully deleted image file: ${absolutePath}`);
                    } catch (fileDeleteError) {
                        console.error(`Failed to delete image file ${museum.imageUrl}:`, fileDeleteError);
                       
                    }
                }

                await prisma.museum.delete({
                    where: { idMuseum: idInt }, 
                });

                return res.status(200).json({ success: true, message: 'Museum deleted successfully.' });
            } catch (e) {
                console.error("DELETE Museum API Error:", e);
                return res.status(500).json({
                    success: false,
                    message: 'Failed to delete museum.',
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