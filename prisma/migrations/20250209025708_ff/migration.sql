/*
  Warnings:

  - The values [Phinoex] on the enum `Pettype` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Pettype_new" AS ENUM ('Pheonix', 'Dragon', 'Owl');
ALTER TABLE "Pet" ALTER COLUMN "type" TYPE "Pettype_new" USING ("type"::text::"Pettype_new");
ALTER TYPE "Pettype" RENAME TO "Pettype_old";
ALTER TYPE "Pettype_new" RENAME TO "Pettype";
DROP TYPE "Pettype_old";
COMMIT;
