let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuidv4'),
    router = express.Router();
const DIR = './public/';
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



// router.post('/postProduct', upload('profileImg'), (req, res, next) => {
    const post = async(req,res,next) =>{
    // upload.single('images');
    console.log(req.body);
    const url = req.protocol + '://' + req.get('host')
    console.log(url);
    const prod = new Product({
        _id: new mongoose.Types.ObjectId(),
        prodName:req.body.prodName ,
        categoryName: req.body.categoryName,
        brandName:req.body.brandName,
        tags: req.body.tags,
        actualPrice:req.body.actualPrice,
        discountPrice:req.body.discountPrice,
        userId: req.body.userId,
        img1:{
            imageName:req.body.img1.fileName,
            imagePath:req.body.img1.path,
            imageType:req.body.img1.mimetype,
            imageSize:fileSizeFormatter(req.body.img1.size,2)
        },
        // img2:{
        //     imageName:req.img2.originalname,
        //     imagePath:req.img2.path,
        //     imageType:req.img2.mimetype,
        //     imageSize:fileSizeFormatter(req.img2.size,2)
        // },
        // img3:{
        //     imageName:req.img3.originalname,
        //     imagePath:req.img3.path,
        //     imageType:req.img3.mimetype,
        //     imageSize:fileSizeFormatter(req.img3.size,2)
        // },
        // img4:{
        //     imageName:req.img4.originalname,
        //     imagePath:req.img4.path,
        //     imageType:req.img4.mimetype,
        //     imageSize:fileSizeFormatter(req.img4.size,2)
        // },
        location:req.body.location,
        // profileImg: url + '/public/' + req.file.filename
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
};

// router.get("/", (req, res, next) => {
    const getAll = async (req,res,next) =>{
    Product.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
};
module.exports = {
    getAll,
    post,
}