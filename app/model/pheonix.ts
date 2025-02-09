import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

/**
 * Inserts a new Pheonix record into the database.
 * 
 * @param {Date} lastCheckedDT - The date and time when the Pheonix was last checked.
 * @param {number} vaccinatedCnt - The number of times the Pheonix has been vaccinated.
 * @param {boolean} fireCert - Indicates whether the Pheonix has a valid fire certification.
 * 
 * @returns {Promise<object>} The created Pheonix record.
 * 
 * @throws {Error} If there is an error during the database operations or if the input data is invalid.
 * 
 * The function performs the following steps:
 * 1. Increments a counter in the database.
 * 2. Validates the fire certification and vaccinated count.
 * 3. Creates a new Pheonix record in the database with the provided data.
 */
export const insertPheonix = async (lastCheckedDT: Date, vaccinatedCnt: number, fireCert: boolean) => {

    try {
        const incrementCnt = await prisma.counter.update({
            where: { id: 0 },
            data: { count: { increment: 1 } }
        });
    }
    catch (e) {
        throw new Error(e instanceof Error ? e.message : String(e));
    }
    

    //check fire mai lam certification
    if (fireCert === false) {
        return "Invalid fire certification";
    }

    if (vaccinatedCnt < 0) {
        return "Invalid vaccinated count";
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
        
//get number of pheonixes in the database
export const getNumOfPheonixes = async () => {
    return await prisma.pet.count({
        where: { type: 'Pheonix' }
    });
}