import main from "../../src/database/connection";
import UserModel from "../../src/database/schema";


export default async function get_Users(req, res){
  if (req.method !== 'POST') {
    throw 'Error, method not allowed';
  }
  main().catch(error => {
    console.log('error: ', error);
    
    return res.status(400).json({message:'Failed to add data'})

  });
  const create = new UserModel({name: 'Jane Doe', price: 120 });
  create.save().then(() => {
    console.log('create: ', create);
    return    res.status(200).json(create)
  })

// const { method } = req;
// switch(method) {
// case 'GET':
//   const users = await UserModel.find({})
//   res.status(200).json({ success: true, data: users })
// break;
// case 'POST': 
//   const create = new UserModel({name: 'Jane Doe', price: 120 });
//   create.save().then(() => {
//     res.status(200).json(create)
//   })
// break;
// default:
// res.setHeader('Allow', ['GET', 'POST'])
// res.status(405).end('Method ${method) Not Allowed')
// break;

// }


}