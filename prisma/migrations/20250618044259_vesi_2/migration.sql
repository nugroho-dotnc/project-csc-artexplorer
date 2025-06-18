/*
  Warnings:

  - You are about to drop the column `image_url` on the `artgallery` table. All the data in the column will be lost.
  - The primary key for the `feedback` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `full_name` on the `feedback` table. All the data in the column will be lost.
  - You are about to drop the column `id_feedback` on the `feedback` table. All the data in the column will be lost.
  - The primary key for the `museum` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_museum` on the `museum` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `museum` table. All the data in the column will be lost.
  - The primary key for the `orderticket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Oid_museum` on the `orderticket` table. All the data in the column will be lost.
  - You are about to drop the column `id_order` on the `orderticket` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah` on the `orderticket` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[OidMuseum]` on the table `OrderTicket` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageUrl` to the `ArtGallery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idFeedback` to the `Feedback` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idMuseum` to the `Museum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Museum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPublic` to the `Museum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `OidMuseum` to the `OrderTicket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idOrder` to the `OrderTicket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qty` to the `OrderTicket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `OrderTicket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `artgallery` DROP FOREIGN KEY `ArtGallery_museumId_fkey`;

-- DropForeignKey
ALTER TABLE `orderticket` DROP FOREIGN KEY `OrderTicket_Oid_museum_fkey`;

-- DropIndex
DROP INDEX `ArtGallery_museumId_fkey` ON `artgallery`;

-- DropIndex
DROP INDEX `OrderTicket_Oid_museum_key` ON `orderticket`;

-- AlterTable
ALTER TABLE `artgallery` DROP COLUMN `image_url`,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `feedback` DROP PRIMARY KEY,
    DROP COLUMN `full_name`,
    DROP COLUMN `id_feedback`,
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL,
    ADD COLUMN `idFeedback` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`idFeedback`);

-- AlterTable
ALTER TABLE `museum` DROP PRIMARY KEY,
    DROP COLUMN `id_museum`,
    DROP COLUMN `image_url`,
    ADD COLUMN `idMuseum` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `isPublic` BOOLEAN NOT NULL,
    ADD COLUMN `ticketPrice` DOUBLE NULL,
    ADD PRIMARY KEY (`idMuseum`);

-- AlterTable
ALTER TABLE `orderticket` DROP PRIMARY KEY,
    DROP COLUMN `Oid_museum`,
    DROP COLUMN `id_order`,
    DROP COLUMN `jumlah`,
    ADD COLUMN `OidMuseum` INTEGER NOT NULL,
    ADD COLUMN `idOrder` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `qty` INTEGER NOT NULL,
    ADD COLUMN `total` DOUBLE NOT NULL,
    ADD PRIMARY KEY (`idOrder`);

-- CreateIndex
CREATE UNIQUE INDEX `OrderTicket_OidMuseum_key` ON `OrderTicket`(`OidMuseum`);

-- AddForeignKey
ALTER TABLE `ArtGallery` ADD CONSTRAINT `ArtGallery_museumId_fkey` FOREIGN KEY (`museumId`) REFERENCES `Museum`(`idMuseum`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderTicket` ADD CONSTRAINT `OrderTicket_OidMuseum_fkey` FOREIGN KEY (`OidMuseum`) REFERENCES `Museum`(`idMuseum`) ON DELETE RESTRICT ON UPDATE CASCADE;
