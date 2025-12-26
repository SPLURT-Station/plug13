-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(20) NOT NULL,
    `username` VARCHAR(32) NOT NULL,
    `token_version` SMALLINT NOT NULL DEFAULT 0,

    UNIQUE INDEX `users_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `connection_strings` (
    `id` VARCHAR(36) NOT NULL DEFAULT (UUID()),
    `value` CHAR(10) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `owner_id` VARCHAR(20) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `connection_strings` ADD CONSTRAINT `connection_strings_owner_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
