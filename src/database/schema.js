import mongoose from "mongoose";

const Power = new mongoose.Schema({
title: String, 
images: [String], 
description: String,
category: String,
price: Number,
weight: String,
isFeatured: Boolean
});

// const itemsDbs = mongoose.model('itemsDb', itemsDb)
const Powers = mongoose.model('Power')  || mongoose.model('Power', Power)
export default Powers;