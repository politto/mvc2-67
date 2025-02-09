
import { insertDragon } from '../model/dragon';
import { NextRequest, NextResponse } from 'next/server';
import { insertPheonix } from '../model/pheonix';
import { insertOwl } from '../model/owl';

type Props = {
    petType: string;
    lastCheckedDT: Date;
    dustLevel: number | undefined;
    fireCert: boolean | undefined;
    longestFlyingRange : number | undefined;
    vaccinatedCnt: number;
    req: NextRequest;
    res: NextResponse;

}

export default async function PetValidation({lastCheckedDT, dustLevel, vaccinatedCnt, petType, fireCert, longestFlyingRange, req, res}: Props) {
  let ret = "";
console.log("aaaaaaaa");

  if (lastCheckedDT === null || lastCheckedDT > new Date()) {
    ret = 'Invalid last checked date';
  }

    // specifies the type of pet and calls model files and fns to handle the data
    if (petType === "Dragon") {
      try {
        const dragon = await insertDragon( lastCheckedDT, dustLevel!, vaccinatedCnt);
        // set response status to 201 and return the dragon object
        
        return new NextResponse(JSON.stringify(dragon), { status: 201 });
      } catch (e) {
        console.log(e);
        
        return new NextResponse(JSON.stringify({ message: "err dragon" }), { status: 400 });
      }
    }
    else if (petType === "Owl") {
      try {
        const owl = await insertOwl(lastCheckedDT, vaccinatedCnt, longestFlyingRange!);
        return new NextResponse(JSON.stringify(owl), { status: 201 });
      } catch (e) {
        console.log("err owl");
        
        return new NextResponse(JSON.stringify({ message: e }), { status: 400 });
      }
    }
    else if (petType === "Pheonix") {
      try {
        const pheonix = await insertPheonix(lastCheckedDT, vaccinatedCnt, fireCert!);
        return new NextResponse(JSON.stringify(pheonix), { status: 201 });
      } catch (e) {
        return new NextResponse(JSON.stringify({ message: e }), { status: 400 });
      }
    }
    else {
      return new NextResponse(JSON.stringify({ message: "Invalid pet type" }), { status: 400 });
    }



  
  

}