import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../src/database/mongodb';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const order = req.body.order
  if (req.method === 'POST') {
    // Process a POST request
    if (!order) return res.status(400).json({success:false})
       const insertReq = await client.db("Power").collection("Orders").insertOne(order);
       if (insertReq.acknowledged) {         
         return res.status(200).json({success:true});
        }
}
return res.status(404).json({success:false});

}