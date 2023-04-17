let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuidv4'),
    router = express.Router();
const DIR = './public/';
const {fileSizeFormatter,saveImageArray} = require("../../utils/commonFunctions");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
// Product model
let Product = require('../models/Product');
let Images = require('../models/images');



    const post = async(req,res,next) =>{
    try{
        const url = req.protocol + '://' + req.get('host')
    const prod = new Product({
        _id: new mongoose.Types.ObjectId(),
        prodName:req.body.prodName ,    
        categoryName: req.body.categoryName,
        brandName:req.body.brandName,
        tags: req.body.tags,
        actualPrice:req.body.actualPrice,
        discountPrice:req.body.discountPrice,
        userId: req.body.userId,
        image1:req.body.image1,
        image2:req.body.image2,
        image3:req.body.image3,
        image4:req.body.image4,
        location:req.body.location,
    });
    prod.save().then(result => {
        res.status(201).json({
            message: "Product saved successfully!",
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
    }
    catch(error){
        return error;
    }
};


    const getAll = async (req,res,next) =>{
    Product.find().populate('userId').populate('image1').populate('image2').populate('image3').populate('image4').then(data => {
        res.status(200).json({
            message: "Product list retrieved successfully!",
            users: data
        });
    });
};

const getImages = async (req,res,next) =>{
    console.log("Reachedd")
    Images.find().then(data => {
        res.status(200).json({
            message: "Image list retrieved successfully!",
            users: data
        });
    });
};
module.exports = {
    getAll,
    getImages,
    post,
}