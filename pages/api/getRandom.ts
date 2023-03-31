import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../src/database/mongodb';


// fake data
// import products from '../../utils/data/products';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {


    // const product = _req.body.product
    if (_req.method === 'GET') {
      let search = _req.query?.search;
      let totalCount = Boolean(_req.query?.totalCount) || false;

      const ProductsCollection = await client.db("Power").collection("Products")
      let docs = search ?
        await ProductsCollection.aggregate([{ $sample: { size: 10 } }]) :
          await ProductsCollection.aggregate([{ $sample: { size: 10 } }])
      let count;
      if (totalCount) count = await ProductsCollection.count()

      const products: any[] = [];
      await docs.forEach((prod: any) => {
        products.push(prod);
      })
      if (products.length > 0 && count !== 0) {
        return res.status(200).json({ products, count });

      }
      if (products.length > 0) {
        return res.status(200).json({ products });
      }
    }
    return res.status(400).json({ success: false });

  }

  catch (e) {
    console.log('e: ', e);
    return res.status(400).json({ success: false });

  }
}