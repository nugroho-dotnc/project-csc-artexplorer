/*
  Warnings:

  - You are about to drop the column `isPublic` on the `museum` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `museum` DROP COLUMN `isPublic`,
    ADD COLUMN `isReccomended` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `events` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `museumId` INTEGER NOT NULL,

    UNIQUE INDEX `events_museumId_key`(`museumId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_museumId_fkey` FOREIGN KEY (`museumId`) REFERENCES `Museum`(`idMuseum`) ON DELETE RESTRICT ON UPDATE CASCADE;
