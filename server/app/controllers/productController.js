let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuidv4'),
    router = express.Router();
const DIR = './public/';



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });
// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });
// Product model
let Product = require('../models/Product');

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
        res.status(201).json({
            message: "Product list retrieved successfully!",
            products: data
        });
    });
};

const getProductById = async(req,res,next) =>{
    try{
        let id = req.params.id
        let prod = await Product.find({_id:id}).exec();
        if(prod.length > 0){
            let similarBrand = await Product.find({brandName:prod[0].brandName}).where('_id').ne(id).populate('image1').populate('image2').populate('image3').populate('image4').exec();
            let similarCategory = await Product.find({categoryName:prod[0].categoryName}).where('_id').ne(id).populate('image1').populate('image2').populate('image3').populate('image4').exec();
            res.status(200).json({
                message: "Product retrieved successfully!",
                product:prod,
                relatedProducts:{
                    similarBrand:similarBrand,
                    similarCategory:similarCategory
                }
            });
        }
        res.status(200).json({
            message: "A Error Occured"
        })
    }
    catch(err){
        res.status(200).json({
            message: err
        }) 
    }
}


module.exports = {
    getAll,
    post,
    getProductById
}