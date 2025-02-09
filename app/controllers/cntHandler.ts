import { NextApiRequest, NextApiResponse } from "next";
import { getCandidateCount } from "../model/counter";
import { getNumOfDragons } from "../model/dragon";
import { getNumOfOwls } from "../model/owl";
import { getNumOfPheonixes } from "../model/pheonix";

type Props = {

}

export default async function CntHandler({}: Props) {

    // get the counter from the db
    const candidateCount = await getCandidateCount();
    const dragonCount = await getNumOfDragons();
    const owlCount = await getNumOfOwls();
    const pheonixCount = await getNumOfPheonixes();

    console.log(candidateCount, dragonCount, owlCount, pheonixCount);
    
    return {
        all: candidateCount?.count,
        dragon: dragonCount,
        owl: owlCount,
        pheonix: pheonixCount
    }
  

}