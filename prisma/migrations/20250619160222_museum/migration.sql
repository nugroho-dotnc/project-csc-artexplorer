/*
  Warnings:

  - You are about to drop the column `isReccomended` on the `museum` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `museum` DROP COLUMN `isReccomended`,
    ADD COLUMN `isRecomended` BOOLEAN NOT NULL DEFAULT false;
