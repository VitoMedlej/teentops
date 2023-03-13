import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../src/database/mongodb';


// fake data
// import products from '../../utils/data/products';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {


  // const product = _req.body.product
  if (_req.method === 'GET') {

    let category = _req.query?.category  === 'products' ? null : _req.query.category ;
    let search = _req.query?.search;
    console.log('search: ', search);
    let limit = typeof Number(_req.query.limit) === 'number' ? Number(_req.query.limit) : 50;
    // maloma ma7sora
    // 5abera basera
    // kabera
    // Process a POST request
    // if (!product) return res.status(400).json({success:false})
       const ProductsCollection = await client.db("Power").collection("Products")
      //  let docs = category ? await ProductsCollection.find({category}).limit(limit ) : await ProductsCollection.find({}).limit(limit )
       let docs = search ?
       await ProductsCollection.find({ $text: {$search: `${search}` }}).limit(limit ) :
       category ? await ProductsCollection.find({category}).limit(limit ) :
       await ProductsCollection.find({}).limit(limit )
        // const quer =async () => {
        //   if (category) {
        //     return await ProductsCollection.find({category}).limit(limit )
        //     // return docs
        //   }
        //   if (search) {
        //    return  await ProductsCollection.find({ $or: [ { title: `${search}` }, { description: `${search}` } ] }).limit(limit )
        //     // return docs
        //   }
        //    return await ProductsCollection.find({}).limit(limit )
        //   // return docs;
        //   }
        //   console.log('quer: ', quer);
        // const docs : any = quer()
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
