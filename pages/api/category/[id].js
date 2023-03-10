import main from "../../database/connection";
import UserModel from "../../database/schema";


export default async function get_Cat(req, res){

  main().catch(error => console.error(error));
  const {id} = req.query;
  const users = await UserModel.find({category : id})
  res.status(200).json({ data: users })
 
}


 