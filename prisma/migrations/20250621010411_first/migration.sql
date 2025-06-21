-- CreateTable
CREATE TABLE `Museum` (
    `idMuseum` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `rate` DOUBLE NULL DEFAULT 0,
    `totalVote` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`idMuseum`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArtGallery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imageUrl` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `museumId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feedback` (
    `idFeedback` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idFeedback`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MuseumRateList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idMuseum` INTEGER NOT NULL,
    `fullname` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `rate` DOUBLE NOT NULL,
    `review` VARCHAR(191) NULL,

    UNIQUE INDEX `MuseumRateList_idMuseum_email_key`(`idMuseum`, `email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `events` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `museumId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ArtGallery` ADD CONSTRAINT `ArtGallery_museumId_fkey` FOREIGN KEY (`museumId`) REFERENCES `Museum`(`idMuseum`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MuseumRateList` ADD CONSTRAINT `MuseumRateList_idMuseum_fkey` FOREIGN KEY (`idMuseum`) REFERENCES `Museum`(`idMuseum`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_museumId_fkey` FOREIGN KEY (`museumId`) REFERENCES `Museum`(`idMuseum`) ON DELETE RESTRICT ON UPDATE CASCADE;
