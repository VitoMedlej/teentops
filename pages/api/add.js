import main from "../database/connection";
import UserModel from "../database/schema";


export default async function get_Users(req, res){

  main().catch(error => console.error(error));
  const create = new UserModel({name: 'Jane Doe', price: 120 });
  create.save().then(() => {
    console.log('create: ', create);
    return    res.status(200).json(create)
  })

 


}