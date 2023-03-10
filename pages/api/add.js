import main from "../database/connection";
import UserModel from "../database/schema";


export default async function get_Users(req, res){

  main().catch(error => console.error(error));
  const create = new UserModel({title: "Deskk", array_of_img:["abc", "efg"],desc:"dsasdas",category:"bus", price: 333, desc_opt: ["abc", "efg"], isFeatured: true });
  create.save().then(() => {
    console.log('create: ', create);
    return    res.status(200).json(create)
  })
 

}
 