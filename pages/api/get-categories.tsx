import type { NextApiRequest, NextApiResponse } from 'next';
// import client from '../mongodb';
// import { ObjectId } from 'mongodb';
// import client from '../../src/database/mongodb';


const categories =
[
    {
        category: "electronics",
        subCategory: ['']
        ,img : `https://www.ishtari.com/image/data/system_banner/10000/200/750/chargers2.png`,
    },
    {
        category: "kitchen appliances",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/appliances.png`,
        subCategory: ['']
    },
    {
        category: "furniture",img : `https://www.ishtari.com/image/cache/data/system_category/10000/3800/3664/sofaaaaaad-160x160.png?3`,
        subCategory: ['']
    },
    {
        category: "toys",img : `https://www.ishtari.com/image/cache/data/system_category/10000/4600/4413/toyyyy-160x160.png?3`,
        subCategory: ['']
    },
    {
        category: "cameras",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/camera.png`,
        subCategory: ['']
    },
    {
        category: "beauty",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/beauty.png`,
        subCategory: ['']
    },
    {
        category: "luggage",img : ``,
        subCategory: ['']
    },
    {
        category: "kitchen",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/kitchen.png`,
        subCategory: ['']
    },
    {
        category: "tools",img : `https://www.ishtari.com/image/cache/data/system_product/110000/104600/104482/3-192x264.jpg?3`,
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
        category: "forbaby",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/baby.png`,
        subCategory: ['']
    },
    {
        category: "inflatable",img : ``,
        subCategory: ['']
    },
    {
        category: "massager",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/massager.png`,
        subCategory: ['']
    },
    {
        category: "office_furniture",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/office.png`,
        subCategory: ['']
    },
    {
        category: "power_banks",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/powerbank.png`,
        subCategory: ['']
    },
    {
        category: "safe_boxes",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/safebox.png`,
        subCategory: ['']
    },
    {
        category: "shoes",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/shoes.png`,
        subCategory: ['']
    },
    {
        category: "storage",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/storage.png`,
        subCategory: ['']
    },
    {
        category: "water_sports",img : `https://www.ishtari.com/image/data/system_banner/10000/3600/3436/water-sport.png`,
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