import main from "../database/connection";
import UserModel from "../database/schema";


export default async function get_Users(req, res){

  main().catch(error => console.error(error));
  const create = new UserModel(req.body);
  create.save().then(() => {
    return    res.status(200).json(create)
  })
 

}
 