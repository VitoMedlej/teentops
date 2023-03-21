// import main from "../../src/database/connection";
// import UserModel from "../../src/database/schema";


// export default async function get_Users(req:any, res:any){

//   main().catch((error:any) => console.error(error));

//   const highest = await UserModel
//   .find({})
//   .sort({"price":-1})
//   .limit(4)

//   const featured = await UserModel.find({isFeatured : true}).limit(4)
//   const latest = await UserModel.find({}).sort({_id: -1}).limit(4)
//   const category = await UserModel.find().distinct('category') 
//   const arr = [{title:'highest', data:highest} , {title: 'featured' , data :featured} , {title:  'latest',data : latest} , {title:  'category',data : category}];
//   res.status(200).json({ arr })
 
// }

import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../src/database/mongodb';

// fake data
// import products from '../../utils/data/products';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    
 
  // const product = _req.body.product
  if (_req.method === 'GET') {

    // const highest = await UserModel
    // .find({})
    // .sort({"price":-1})
    // .limit(4)
  
    // const featured = await UserModel.find({isFeatured : true}).limit(4)
    // const latest = await UserModel.find({}).sort({_id: -1}).limit(4)
    // const category = await UserModel.find().distinct('category') 
    // const arr = [{title:'highest', data:highest} , {title: 'featured' , data :featured} , {title:  'latest',data : latest} , {title:  'category',data : category}];
    // res.status(200).json({ arr })

       const ProductsCollection = await client.db("Power").collection("Products");

       let data : any = [];
       const docs = await ProductsCollection.find({}).sort({createdAt : 1}).limit(30)
      //  const highest = await ProductsCollection.find({"price":-1}).limit(4)
    // const featured = await ProductsCollection.find({isFeatured:true}).limit(4)
    // const latest = await ProductsCollection.find({}).sort({_id:-1}).limit(4)
    const category = await ProductsCollection.distinct('category')
    
    
    // const arr = [{title:'highest', data:highest} , {title: 'featured' , data :featured} ,
    // {title:  'latest',data : latest} , {title:  'category',data : category}];
    await docs.forEach( (doc:any) =>{
        // await data.forEach((product:any)=>{
          // console.log('product: ', product);
          data.push(doc)
        // })
        // console.log('prod: ', prod);
        // products.push(prod);t
      })
    // let limit = typeof Number(_req.query.limit) === 'number' ? Number(_req.query.limit) : 50;
    // maloma ma7sora
    // 5abera basera
    // kabera
    // Process a POST request
    // // if (!product) return res.status(400).json({success:false})
    //    console.log('docs: ', docs);
    //   //  console.log('docs: ', docs);
    //   const products : any[] = [];
    //     if (products.length > 0) {
    //       // console.log('products: ', products);
    //       // console.log('products: ', products);
    //         return res.status(200).json(products);
    //       }
    if (data.length > 0) {

      return res.status(200).json({data,category});
    }

  }
return res.status(404).json({success:false});
    // return res.status(200).send(products)
  }
  catch(err) {

    console.log('err homets: ', err);
return res.status(404).json({success:false});
    
  }
}
