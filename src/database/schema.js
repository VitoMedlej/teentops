import mongoose from "mongoose";

const itemsDb = new mongoose.Schema({
title: String,
price: Number
});
//title, id, price, description, category, additionalInfo, img (main) , images (array of images)
const itemsDbs = mongoose.model('itemsDb', itemsDb)
// const itemsDbs = mongoose.model('itemsDb') || mongoose.model('itemsDb', itemsDb)
export default itemsDbs;