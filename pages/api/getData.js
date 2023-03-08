import main from "../../src/database/connection";
import UserModel from "../../src/database/schema";


export default async function get_Users(req, res){

  main().catch(error => console.error(error));
  const users = await UserModel.find({})
  console.log('users: ', users);
  res.status(200).json({ success: true, data: users })
 
}