import mongoose from "mongoose";

const itemsDb = new mongoose.Schema({
name: String,
img: String,
desc: String,
price: Number
});

// const itemsDbs = mongoose.model('itemsDb', itemsDb)
const itemsDbs = mongoose.model('itemsDb') || mongoose.model('itemsDb', itemsDb)
export default itemsDbs;