import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

export const insertPheonix = async (lastCheckedDT: Date, vaccinatedCnt: number, fireCert: boolean) => {

    try {
        const incrementCnt = await prisma.counter.update({
            where: { id: 1 },
            data: { count: { increment: 1 } }
        });
    }
    catch (e) {
        throw new Error(e instanceof Error ? e.message : String(e));
    }
    

    //check fire mai lam certification
    if (fireCert === false) {
        throw new Error('Invalid fire certification');
    }

    if (vaccinatedCnt < 0) {
        throw new Error('Invalid vaccinated count');
    }

    try {
        const Pheonix = await prisma.pet.create({
            data: {
                type: 'Pheonix',
                foodCode: randomFoodCode(),
                lastCheckedDT: lastCheckedDT!,
                fireCert: fireCert!,
        vaccinatedCnt: vaccinatedCnt ?? 0, // ✅ Default to 0
            }
        });

        
        return Pheonix;
    } catch (e) {
        
        throw new Error(e instanceof Error ? e.message : String(e));
    }
}

//random food code to be number string length 8 and not starts with 0
export const randomFoodCode = () => {
    let code = Math.floor(Math.random() * 90000000) + 10000000;
    return code.toString();
}
        