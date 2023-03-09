import main from "../database/connection";
import UserModel from "../database/schema";


export default async function get_ProductId(req, res){

  main().catch(error => console.error(error));
  const id = req.query.id;
  const users = await UserModel.findById(id)
  res.status(200).json({ data: users })
 
}


 