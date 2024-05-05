import type { NextApiRequest, NextApiResponse } from 'next';
// import client from '../mongodb';
import { ObjectId } from 'mongodb';
import client from '../../src/database/mongodb';


// let backup =[
//     {
//       categoryImage: [
//         {
//             img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3376/power-banks.png",
//             category: "electronics"
//             , subCategory: ""
//         }, {
//             img: `https://www.ishtari.com/image/data/system_banner/10000/3400/3376/appliances.png`,
//             category: "kitchen appliances"
//             , subCategory: ""

//         },
//         {
//             img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3376/offices.png",
//             category: "furniture"
//             , subCategory: ""

//         }, {
//             img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3376/for-baby.png",
//             category: "toys"
//             , subCategory: ""

//         },
//         {
//             img: `https://www.ishtari.com/image/data/system_banner/10000/3400/3376/cameras.png`,
//             category: "cameras"
//             , subCategory: ""

//         }, {
//             img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3376/beauty.png",

//             category: "beauty"
//             , subCategory: ""

//         },
//         {
//             img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3409/luggages.png",
//             category: "luggage"
//             , subCategory: ""

//         }, {
//             img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3376/kitchen.png",
            
//             category: "kitchen"
//             , subCategory: ""
            
//         }
//     ],
//       MainCarousel: [
//         {
//           img: "https://ucarecdn.com/66b8154e-a03e-4b9f-a161-5695638874ec/GrayandGreenElectronicAdvertisementBannerFacebookAds21.png",
//           category: ""
//           , subCategory: ""
        
//         },
//         {
//             img: "https://ucarecdn.com/bd4333ac-e788-487f-b948-cddb3b76075f/fan.JPG",
//             category: ""
//             , subCategory: ""
        
//         },
//         {
//           img: "https://ucarecdn.com/31b86d26-4306-43c4-88fb-931e581d2452/teenad2.JPG",
//           category: ""
//           , subCategory: ""
        
//         },
//         {
//             img: "https://ucarecdn.com/9bab3ea9-88c5-4799-bbc4-476a8281ae7b/teenad.JPG",
//             category: ""
//             , subCategory: ""
        
//         }
//       ],
//       six :
//       [
//         {
//           img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3408/sports-outdoors-web.png",
//           category: ""
//           , subCategory: ""
       
//         },
//         {
//             img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3409/luggages.png",
//             category: ""
//             , subCategory: ""
       
//         },

//       ], 
//       abdtahan: [
//         {
//             img:`https://ucarecdn.com/c9ceeb73-cce7-4189-9370-4ffaf38742fa/washing.jpeg`,
//             category: ""
//             , subCategory: ""
       
//         },
//         {
//             img: `https://th.bing.com/th/id/OIP.G40QfbeKil8GA3cSjfF59QHaHa?pid=ImgDet&w=172&h=172&c=7&dpr=1.1`,
//             category:""
//             , subCategory: ""
       
//         },
//         {
//             img: `https://th.bing.com/th/id/OIP.RTpAnPqYMvk7hMvKDH54KwHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.1&pid=1.7`,
//             category:""
//             , subCategory: ""
       
//         },
//         {
//             img:`https://www.ishtari.com/image/cache/data/system_product/110000/109200/109820/1-192x264.jpg?3`,
//             category:''
//             , subCategory: ""
       
//         }
    

//       ],
//       third: [
//         {
//           img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3378/cameras.png",
//           category: ""
//           , subCategory: ""
       
//         },
//         {
//           img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3378/smartwatches.png",
//           category: ""
//           , subCategory: ""
       
//         },
//         {
//           img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3378/power-banks.png",
//           category: ""
//           , subCategory: ""
       
//         },
//         {
//           img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3378/earphoness.png",
//           category: ""
//           , subCategory: ""
       
//         }
//       ],
//       fourth: "https://www.ishtari.com/image/data/system_banner/10000/3400/3379/home-kitchen.png"
//       ,
//       fifth : `https://www.ishtari.com/image/data/system_banner/10000/3400/3379/home-kitchen.png`,
//       seventh : `https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/jioretailer/company/5/applications/6316f3d9c334522a29606e1d/theme/pictures/free/original/theme-image-1669353430549.jpeg`,
//       fifths :  [
//         {
//           img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3408/sports-outdoors-web.png",
//           category: ""
//           , subCategory: ""
       
//         },
//         {
//           img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3408/sports-outdoors-web.png",
//           category: ""
//           , subCategory: ""
       
//         },
//         {
//           img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3408/sports-outdoors-web.png",
//           category: ""
//           , subCategory: ""
       
//         }
    
//       ],
      
//       last: "https://www.ishtari.com/image/data/system_banner/10000/1800/1703/electronic-banne-app.png"
//       ,brands : [
//         {
//             img: 
//             `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/tefal.png`,
       
//         },
//         {
//             img: `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/queen-chef.png`,
//         },
//         {
//             img:  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/ingco.png`,
//         },
//         {
//             img:  `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/beper.png`,
//         },
//         {
//             img:     `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/mulinex.png`,
//         },
//         {
//             img: `https://www.ishtari.com/image/data/system_banner/10000/3600/3402/pyrex.png`,
//         },
   
//       ]
//     }
//   ]

let backup : any =[
//    {
//     sectionTitle:'MainCarousel',
//     images : [
//       {
//                   img: "https://ucarecdn.com/66b8154e-a03e-4b9f-a161-5695638874ec/-/resize/600/",
//                   category: ""
//                   , subCategory: ""
                
//                 },
//                 {
//                     img: "https://ucarecdn.com/bd4333ac-e788-487f-b948-cddb3b76075f/-/resize/600/",
//                     category: ""
//                     , subCategory: ""
                
//                 },
//                 {
//                   img: "https://ucarecdn.com/31b86d26-4306-43c4-88fb-931e581d2452/-/resize/600/",
//                   category: ""
//                   , subCategory: ""
                
//                 },
//                 {
//                     img: "https://ucarecdn.com/9bab3ea9-88c5-4799-bbc4-476a8281ae7b/-/resize/600/",
//                     category: ""
//                     , subCategory: ""
                
//                 }
//     ],
//    },
  {
    SectionTitle: 'Category Section',
    type:'categorySection',
    category : ``,

    images:  [
      {
          img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3376/power-banks.png",
          category: "electronics"
          , subCategory: ""
      }, {
          img: `https://www.ishtari.com/image/data/system_banner/10000/3400/3376/appliances.png`,
          category: "kitchen appliances"
          , subCategory: ""

      },
      {
          img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3376/offices.png",
          category: "furniture"
          , subCategory: ""

      }, {
          img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3376/for-baby.png",
          category: "toys"
          , subCategory: ""

      },
      {
          img: `https://www.ishtari.com/image/data/system_banner/10000/3400/3376/cameras.png`,
          category: "cameras"
          , subCategory: ""

      }, {
          img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3376/beauty.png",

          category: "beauty"
          , subCategory: ""

      },
      {
          img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3409/luggages.png",
          category: "luggage"
          , subCategory: ""

      }, {
          img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3376/kitchen.png",
          
          category: "kitchen"
          , subCategory: ""
          
      }
  ]
  },


  {
    
    sectionTitle: 'Browse Products - تصفح المنتجات',
    type:'ProductsSection',
    category : `products`,
  }

// ,
//   {
//     sectionTitle: "Electronics",
//     type: "FourImageSection",
//     category : `electronics`,

//     images: [
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3378/cameras.png",
//         category: "cameras",
//         subCategory: ""
//       },
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3378/smartwatches.png",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3378/power-banks.png",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3378/earphoness.png",
//         category: "",
//         subCategory: ""
//       }
//     ]
//   },
//   {
//     sectionTitle: "Tools - أدوات",
//     type: "FullScreenCarousel",
//     category : `tools`,

//     images: [
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3408/sports-outdoors-web.png",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3409/luggages.png",
//         category: "",
//         subCategory: ""
//       }
//     ]
//   },
//   {
//     sectionTitle: "Individual Image",
//     type: "individualImage",
//     category : `kitchen appliances`,

//     images: [
//       {
//         img: "https://ucarecdn.com/6eafad08-6b68-48e6-a640-c63bb433212c/-/resize/600/",
//         category: "",
//         subCategory: ""
//       }
//     ]
//   },
//   {
//     sectionTitle: "Kitchen - ادوات المطبخ",
//     category : `kitchen appliances`,
//     type: "FullSection",
//     images: [
//       {
//         img: "https://ucarecdn.com/c9ceeb73-cce7-4189-9370-4ffaf38742fa/-/resize/600/",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://th.bing.com/th/id/OIP.G40QfbeKil8GA3cSjfF59QHaHa?pid=ImgDet&w=172&h=172&c=7&dpr=1.1",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://th.bing.com/th/id/OIP.RTpAnPqYMvk7hMvKDH54KwHaHa?w=219&h=219&c=7&r=0&o=5&dpr=1.1&pid=1.7",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://www.ishtari.com/image/cache/data/system_product/110000/109200/109820/1-192x264.jpg?3",
//         category: "",
//         subCategory: ""
//       }
//     ]
//   },

//   {
//     sectionTitle: "Individual Image",
//     type: "individualImage",
//     category : `kitchen appliances`,

//     images: [
//      {img: "https://www.ishtari.com/image/data/system_banner/10000/3400/3379/home-kitchen.png",}
   
//     ]
//   },

  
//   {
//     sectionTitle: "Brands",
//     category : ``,

//     type: "Brands",
//     images: [
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3402/tefal.png",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3402/queen-chef.png",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3402/ingco.png",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3402/beper.png",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3402/mulinex.png",
//         category: "",
//         subCategory: ""
//       },
//       {
//         img: "https://www.ishtari.com/image/data/system_banner/10000/3600/3402/pyrex.png",
//         category: "",
//         subCategory: ""
//       }
//     ]
//   }
// ,
// {
// sectionTitle: 'Home & Kitchen - المنزل والمطبخ',
// type:'ProductsSection',
// category : `kitchen appliances`,
// }

]




export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {


  if (req.method === 'GET') {
//   const id = req.query.pid;  
//   if (!id) {
// return res.status(404).json({success:false});
    
//   }
    // const product = await client.db("Power").collection("Products").findOne({_id:new ObjectId(`${id}`)});
    //    if (product) {         
         return res.status(200).json(backup);
    //     }
}
return res.status(404).json({success:false});
}
catch (e){
  console.log('e: ', e);
  return res.status(404).json({success:false});

}
}