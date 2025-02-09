import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

export const insertDragon = async (lastCheckedDT: Date, dustLevel: number, vaccinatedCnt: number) => {

    try {
        const incrementCnt = await prisma.counter.update({
            where: { id: 0 },
            data: { count: { increment: 1 } }
        });
    }
    catch (e) {
        throw new Error(e instanceof Error ? e.message : String(e));
    }
    
    

    if (dustLevel < 0 || dustLevel > 70) {
        return "Invalid dust level";
    }

    if (vaccinatedCnt < 0) {
        return "Invalid vaccinated count";
    }
    console.log(lastCheckedDT, dustLevel, vaccinatedCnt);
    
    
    try {
        const dragon = await prisma.pet.create({
            data: {
                type: 'Dragon',
                foodCode: randomFoodCode(),
                lastCheckedDT: lastCheckedDT!,
                dustLevel: dustLevel ?? 0, // ✅ Default to 0
        vaccinatedCnt: vaccinatedCnt ?? 0, // ✅ Default to 0
            }
        });

        
        return dragon;
    } catch (e) {
        
        throw new Error(e instanceof Error ? e.message : String(e));
    }
}

//random food code to be number string length 8 and not starts with 0
export const randomFoodCode = () => {
    let code = Math.floor(Math.random() * 90000000) + 10000000;
    return code.toString();
}

//get number of dragons in the database
export const getNumOfDragons = async () => {
    return await prisma.pet.count({
        where: { type: 'Dragon' }
    });
}