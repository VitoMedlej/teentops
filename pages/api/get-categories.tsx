import type { NextApiRequest, NextApiResponse } from 'next';
// import client from '../mongodb';
import { ObjectId } from 'mongodb';
import client from '../../src/database/mongodb';


let backup =
[
    {
        category: "electronics",
        subCategory: ['']
    },
    {
        category: "kitchen appliances",
        subCategory: ['']
    },
    {
        category: "furniture",
        subCategory: ['']
    },
    {
        category: "toys",
        subCategory: ['']
    },
    {
        category: "cameras",
        subCategory: ['']
    },
    {
        category: "beauty",
        subCategory: ['']
    },
    {
        category: "luggage",
        subCategory: ['']
    },
    {
        category: "kitchen",
        subCategory: ['']
    },
    {
        category: "tools",
        subCategory: ['']
    },
    {
        category: "camping",
        subCategory: ['']
    },
    {
        category: "faucets",
        subCategory: ['']
    },
    {
        category: "forbaby",
        subCategory: ['']
    },
    {
        category: "inflatable",
        subCategory: ['']
    },
    {
        category: "massager",
        subCategory: ['']
    },
    {
        category: "office_furniture",
        subCategory: ['']
    },
    {
        category: "power_banks",
        subCategory: ['']
    },
    {
        category: "safe_boxes",
        subCategory: ['']
    },
    {
        category: "shoes",
        subCategory: ['']
    },
    {
        category: "storage",
        subCategory: ['']
    },
    {
        category: "water_sports",
        subCategory: ['']
    },
    {
        category: "cloth",
        subCategory: ['']
    }
]




export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {


  if (req.method === 'GET') {
//   const id = req.query.pid;  
//   if (!id) {
// return res.status(404).json({success:false});
    
//   }
    // const product = await client.db("Power").collection("Products").findOne({_id:new ObjectId(`${id}`)});
    //    if (product) {         
         return res.status(200).json(backup);
    //     }
}
return res.status(404).json({success:false});
}
catch (e){
  console.log('e: ', e);
  return res.status(404).json({success:false});

}
}