import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

//connect db to get counter id = 0
export const getCandidateCount = async () => {
    const candidateCount = await prisma.counter.findFirst({
        where: { id: 0 },
        select: { count: true }
    });
    return candidateCount;
}