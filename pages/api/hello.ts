// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // const Person = mongoose.model('Person', yourSchema); 
  // Person.findOne({ 'name': 'Ghost' }, 'name occupation', function (person) {  
  // console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);
  // });
  // res.status(200).json({ name: 'John Doe' })
  
}


