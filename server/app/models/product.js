var mongoose = require("mongoose");
const imageFiles = require("../schemas/imageFiles");

module.exports = mongoose.model("Products",{
    prodName: {type:String, required: true},
    categoryName: {type:String, required: true},
    brandName:{type:String},
    tags: {type:[String], required:true},
    actualPrice:{type:Number, required:true},
    discountPrice:{type:Number, required:true},
    userId: {type:mongoose.SchemaTypes.ObjectId,ref:"User", required:true},
    img1:[imageFiles],
    // img2:[imageFiles],
    // img3:[imageFiles],
    // img4:[imageFiles],
    location:{type:String,required:true}
});