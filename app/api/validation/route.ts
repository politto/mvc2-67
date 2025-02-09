import CntHandler from "@/app/controllers/cntHandler";
import handler from "@/app/controllers/PetValidation";
import { NextRequest, NextResponse } from "next/server";


// route to backend boob boob
export async function POST(req: NextRequest) {
    try {
        
      const body = await req.json();
      const {lastCheckedDT, dustLevel, vaccinatedCnt, petType, fireCert, longestFlyingRange } = body;
      
  
      if ( !lastCheckedDT) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
      }

      const res: NextResponse = new NextResponse();
      
      console.log("sdas");
      
      // go to main backend controller
      const newPet = await handler({ lastCheckedDT, dustLevel, vaccinatedCnt, req, res , petType, fireCert, longestFlyingRange });

      console.log(newPet);
    
        return newPet;
      
    } catch (error) {
      return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
  }


export async function GET(req: NextRequest) {
    try {
        //get the counter from the db (to controller)
        const ret =await CntHandler(req);

        console.log(ret);

        return NextResponse.json(ret, { status: 200 });
        
    }
    catch (e) {
        return NextResponse.json({ message: "Server error", e }, { status: 500 });
    }
}