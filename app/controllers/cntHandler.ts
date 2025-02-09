import { NextApiRequest, NextApiResponse } from "next";

export default async function CntHandler(req:  NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const currentCnt = await getCnt();
            res.status(200).json(currentCnt);
        }
        catch (e) {
            res.status(400).json({ message: e.message });
        }
    }

}