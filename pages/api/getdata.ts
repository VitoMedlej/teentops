import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../src/database/mongodb';


// fake data
// import products from '../../utils/data/products';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {


  // const product = _req.body.product
  if (_req.method === 'GET') {


    let limit = typeof Number(_req.query.limit) === 'number' ? Number(_req.query.limit) : 50;
    // maloma ma7sora
    // 5abera basera
    // kabera
    // Process a POST request
    // if (!product) return res.status(400).json({success:false})
       const ProductsCollection = await client.db("Power").collection("Products")
       const docs = await ProductsCollection.find({}).limit(limit )
      const products : any[] = [];
       await docs.forEach((prod:any) =>{
              products.push(prod);
        })
        if (products.length > 0) {
            return res.status(200).json(products);
          }
}
return res.status(404).json({success:false});
    // return res.status(200).send(products)
    
  }

  catch (e){
    console.log('e: ', e);
    return res.status(404).json({success:false});
  
  }
}
