/*
  Warnings:

  - Added the required column `imageUrl` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL;
