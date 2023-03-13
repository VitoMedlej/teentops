import type { NextApiRequest, NextApiResponse } from 'next';
// import client from '../mongodb';
import { ObjectId } from 'mongodb';
import client from '../../src/database/mongodb';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {


  if (req.method === 'GET') {
  const id = req.query.pid;  
  if (!id) {
return res.status(404).json({success:false});
    
  }
    const product = await client.db("Power").collection("Products").findOne({_id:new ObjectId(`${id}`)});
       if (product) {         
         return res.status(200).json(product);
        }
}
return res.status(404).json({success:false});
}
catch (e){
  console.log('e: ', e);
  return res.status(404).json({success:false});

}
}