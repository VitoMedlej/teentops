import main from "../../src/database/connection";
import UserModel from "../../src/database/schema";


export default async function get_Users(req:any, res:any){

  main().catch((error:any) => console.error(error));

  const highest = await UserModel
  .find({})
  .sort({"price":-1})
  .limit(4)

  const featured = await UserModel.find({isFeatured : true}).limit(4)
  const latest = await UserModel.find({}).sort({_id: -1}).limit(4)
  const category = await UserModel.find().distinct('category') 
  const arr = [{title:'highest', data:highest} , {title: 'featured' , data :featured} , {title:  'latest',data : latest} , {title:  'category',data : category}];
  res.status(200).json({ arr })
 
}