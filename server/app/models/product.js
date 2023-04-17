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
    image1:{type:mongoose.SchemaTypes.ObjectId,ref:"ImageFiles", required:true},
    image2:{type:mongoose.SchemaTypes.ObjectId,ref:"ImageFiles", required:true},
    image3:{type:mongoose.SchemaTypes.ObjectId,ref:"ImageFiles", required:true},
    image4:{type:mongoose.SchemaTypes.ObjectId,ref:"ImageFiles", required:true},
    location:{type:String,required:true},
    isActive:{type:Boolean,required:true,default:true}
});