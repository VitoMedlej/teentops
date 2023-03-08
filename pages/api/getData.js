import main from "../../database/connection";
import UserModel from "../../database/schema";


export default async function get_Users(req, res){

  main().catch(error => console.error(error));
  const users = await UserModel.find({})
  res.status(200).json({ success: true, data: users })
 
}