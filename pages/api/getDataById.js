import main from "../../src/database/connection";
import UserModel from "../../src/database/schema";


export default async function get_ProductId(req, res){

  main().catch(error => console.error(error));
  const id = req.query.id;
  const users = await UserModel.findById(id)
  res.status(200).json({ data: users })
 
}


 