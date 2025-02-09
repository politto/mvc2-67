import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

//insert into db

export const insertOwl = async (lastCheckedDT: Date, vaccinatedCnt: number, longestFlyingLength: number) => {

    

    //increment counter of pet candidates
    try {
        const incrementCnt = await prisma.counter.update({
            where: { id: 0 },
            data: { count: { increment: 1 } }
        });
    }
    catch (e) {
        
        throw new Error(e instanceof Error ? e.message : String(e));
    }
    
    if (vaccinatedCnt < 0) {
        return "Invalid vaccinated count";
    }

    if (longestFlyingLength === undefined || isNaN(longestFlyingLength)) {
        return "Invalid flying length";
      }

    // check bin dai doi mai tan kow
    if (longestFlyingLength < 100) {
        return "Invalid flying length";
    }

    
    
    
    try {
        const Owl = await prisma.pet.create({
            data: {
                type: 'Owl',
                foodCode: randomFoodCode(),
                lastCheckedDT: lastCheckedDT!,
                LongestFlyingLength: longestFlyingLength ?? 0, // ✅ Default to 0
        vaccinatedCnt: vaccinatedCnt ?? 0, // ✅ Default to 0
            }
        });

        
        return Owl;
    } catch (e) {
        
        throw new Error(e instanceof Error ? e.message : String(e));
    }
}

//random food code to be number string length 8 and not starts with 0
export const randomFoodCode = () => {
    let code = Math.floor(Math.random() * 90000000) + 10000000;
    return code.toString();
}
        
//get number of owls in the database
export const getNumOfOwls = async () => {
    return await prisma.pet.count({
        where: { type: 'Owl' }
    });
}