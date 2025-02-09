-- CreateEnum
CREATE TYPE "Pettype" AS ENUM ('Phinoex', 'Dragon', 'Owl');

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "foodCode" VARCHAR(8) NOT NULL,
    "type" "Pettype" NOT NULL,
    "lastCheckedDT" TIMESTAMP(3),
    "vaccinatedCnt" INTEGER,
    "fireCert" BOOLEAN,
    "dustToxicityLevel" INTEGER,
    "LongestStarveFlyingLength" INTEGER,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Counter" (
    "id" INTEGER NOT NULL DEFAULT 0,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Counter_pkey" PRIMARY KEY ("id")
);
