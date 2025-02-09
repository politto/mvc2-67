/*
  Warnings:

  - You are about to drop the column `LongestStarveFlyingLength` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `dustToxicityLevel` on the `Pet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "LongestStarveFlyingLength",
DROP COLUMN "dustToxicityLevel",
ADD COLUMN     "LongestFlyingLength" INTEGER,
ADD COLUMN     "dustLevel" INTEGER;
