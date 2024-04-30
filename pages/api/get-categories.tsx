import type { NextApiRequest, NextApiResponse } from 'next';
// import client from '../mongodb';
// import { ObjectId } from 'mongodb';
// import client from '../../src/database/mongodb';


const categories =
[
    {
        category: "electronics",
        subCategory: ['']
        ,img : ``,
    },
    {
        category: "kitchen appliances",img : ``,
        subCategory: ['']
    },
    {
        category: "furniture",img : ``,
        subCategory: ['']
    },
    {
        category: "toys",img : ``,
        subCategory: ['']
    },
    {
        category: "cameras",img : ``,
        subCategory: ['']
    },
    {
        category: "beauty",img : ``,
        subCategory: ['']
    },
    {
        category: "luggage",img : ``,
        subCategory: ['']
    },
    {
        category: "kitchen",img : ``,
        subCategory: ['']
    },
    {
        category: "tools",img : ``,
        subCategory: ['']
    },
    {
        category: "camping",img : ``,
        subCategory: ['']
    },
    {
        category: "faucets",img : ``,
        subCategory: ['']
    },
    {
        category: "forbaby",img : ``,
        subCategory: ['']
    },
    {
        category: "inflatable",img : ``,
        subCategory: ['']
    },
    {
        category: "massager",img : ``,
        subCategory: ['']
    },
    {
        category: "office_furniture",img : ``,
        subCategory: ['']
    },
    {
        category: "power_banks",img : ``,
        subCategory: ['']
    },
    {
        category: "safe_boxes",img : ``,
        subCategory: ['']
    },
    {
        category: "shoes",img : ``,
        subCategory: ['']
    },
    {
        category: "storage",img : ``,
        subCategory: ['']
    },
    {
        category: "water_sports",img : ``,
        subCategory: ['']
    },
    {
        category: "cloth",img : ``,
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
         return res.status(200).json(categories);
    //     }
}
return res.status(404).json({success:false});
}
catch (e){
  console.log('e: ', e);
  return res.status(404).json({success:false});

}
}