import handler from "@/app/controllers/PetValidation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        
      const body = await req.json();
      const {lastCheckedDT, dustLevel, vaccinatedCnt, petType, fireCert, longestFlyingRange } = body;
      
  
      if ( !lastCheckedDT) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
      }

      const res: NextResponse = new NextResponse();
      
      console.log("sdas");
      
      const newPet = await handler({ lastCheckedDT, dustLevel, vaccinatedCnt, req, res , petType, fireCert, longestFlyingRange });

      console.log(newPet);
    
        return newPet;
      
    } catch (error) {
      return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
  }