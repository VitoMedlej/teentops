import main from "../../database/connection";
import UserModel from "../../database/schema";


export default async function get_Users(req, res){

  main().catch(error => console.error(error));
  const create = new UserModel({name: 'Jane Doe', price: 120 });
  create.save().then(() => {
    res.status(200).json(create)
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