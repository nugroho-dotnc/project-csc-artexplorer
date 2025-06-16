import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const orderTicket = await prisma.orderTicket.findMany();
      return res.status(200).json({
        success: true,
        message: 'List of order ticket successfully loaded',
        data: orderTicket,
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
      const { Oid_museum, jumlah, name, email } = req.body;

      const newOrderTicket = await prisma.orderTicket.create({
        data: {
          Oid_museum: Oid_museum,
          jumlah: jumlah,
          name: name,
          email: email,
        },
      });

      return res.status(201).json({
        success: true,
        message: 'Order successfully created',
        data: newOrderTicket,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Failed to create order',
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