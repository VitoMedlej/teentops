import main from "../../src/database/connection";
import ItemsModel from "../../src/database/schema";


export default async function get_Users(req, res){

  main().catch(error => console.error(error));
  const data = await ItemsModel.find({})
  res.status(200).json({ data })
 
}