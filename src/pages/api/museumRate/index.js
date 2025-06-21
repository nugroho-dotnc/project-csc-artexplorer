import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { idMuseum, fullname, email, rate, review } = req.body;

      const existingMuseum = await prisma.museum.findUnique({
        where: {
          idMuseum: parseInt(idMuseum)
        },
      });

      if (!existingMuseum) {
        return res.status(404).json({
          success: false,
          message: 'museum not found, give a valid museum id',
        });
      }

      const existingRateForMuseum = await prisma.museumRateList.findFirst({
        where: {
          email: email,
          idMuseum: parseInt(idMuseum),
        },
      });

      if (existingRateForMuseum) {
        return res.status(409).json({
          success: false,
          message: 'you\'ve already rated this museum.',
        });
      }

      const newRate = await prisma.museumRateList.create({
        data: {
          idMuseum: parseInt(idMuseum),
          email,
          rate: parseFloat(rate),
          fullname,
          review,
        },
      });

      const totalVote = existingMuseum.totalVote + 1;
      const currentSumOfRates = existingMuseum.rate * existingMuseum.totalVote;
      const newAverageRate = (currentSumOfRates + rate) / totalVote;

      await prisma.museum.update({
        where: {
          idMuseum: parseInt(idMuseum)
        },
        data: {
          rate: parseFloat(newAverageRate.toFixed(2)),
          totalVote: totalVote,
        },
      });

      return res.status(201).json({
        success: true,
        message: 'Rate successfully created',
        data: newRate,
      });

    } catch (e) {
      console.error(e);
      return res.status(500).json({
        success: false,
        message: 'failed to send rate',
        error: e.message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      message: `Metode ${req.method} Tidak Diizinkan`,
    });
  }
}