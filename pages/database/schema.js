import mongoose from "mongoose";

const itemsDb = new mongoose.Schema({
title: String, 
array_of_img: [String], 
desc: String,
category: String,
price: Number,
weight: String,
isFeatured: Boolean
});

// const itemsDbs = mongoose.model('itemsDb', itemsDb)
const itemsDbs = mongoose.model('itemsDb') || mongoose.model('itemsDb', itemsDb)
export default itemsDbs;