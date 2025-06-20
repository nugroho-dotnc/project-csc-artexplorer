/*
  Warnings:

  - You are about to drop the column `isRecomended` on the `museum` table. All the data in the column will be lost.
  - You are about to drop the column `ticketPrice` on the `museum` table. All the data in the column will be lost.
  - You are about to drop the `orderticket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `orderticket` DROP FOREIGN KEY `OrderTicket_OidMuseum_fkey`;

-- AlterTable
ALTER TABLE `museum` DROP COLUMN `isRecomended`,
    DROP COLUMN `ticketPrice`,
    ADD COLUMN `rate` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `totalVote` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `orderticket`;

-- CreateTable
CREATE TABLE `MuseumRateList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idMuseum` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `rate` DOUBLE NOT NULL,

    UNIQUE INDEX `MuseumRateList_idMuseum_key`(`idMuseum`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MuseumRateList` ADD CONSTRAINT `MuseumRateList_idMuseum_fkey` FOREIGN KEY (`idMuseum`) REFERENCES `Museum`(`idMuseum`) ON DELETE RESTRICT ON UPDATE CASCADE;
