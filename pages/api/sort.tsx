import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../src/database/mongodb';
// import client from '../../src/mongodb';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method === 'GET') {

    // let urlls = JSON.parse(_req.query.filter as any) ;  
    const min = Number(_req.query.min) || 1;
    const max = Number(_req.query.max) || 100000;
    const sort = _req.query.order || 'products';
    // const category = _req.query.category ? _req.query.category :  null;
    // const min = price[0];
    // const max = price[1];
    const products: any[] = [];
    const ProductsCollection = await client.db("Power").collection("Products");
    
    if (!sort || sort === 'products' || sort === 'all') {
        const docs = await ProductsCollection.find({ price: { $gte: min, $lte: max } }).limit(12)
        await docs.forEach((prod: any) => {
            products.push(prod);
          })
    }
    else {
        let docs;
        if (
            sort === 'newest'
        ) {

            docs = await ProductsCollection.find().sort({createdAt : -1}).limit(12)
        }
        if (sort === 'highest') {
            docs = await ProductsCollection.find().sort({price : -1}).limit(12)
        }
        if (sort === 'lowest') {
            docs = await ProductsCollection.find().sort({price : 1}).limit(12)
        }
        else {
            docs = await ProductsCollection.find({}).limit(12)
        }
        await docs.forEach((prod: any) => {
            products.push(prod);
          })
    }

    
    if (products.length > 0) {
      return res.status(200).json(products);
    }
  }
  return res.status(400).json({ success: false });
}