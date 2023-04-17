let Images = require('../models/images');
const {fileSizeFormatter} = require("../../utils/commonFunctions");



const uploadImage = async (req,res,next) =>{
    try{
        const image = new Images({
                    imageName:req.file.originalname,
                    imagePath:req.file.path,
                    imageType:req.file.mimetype,
                    imageSize:fileSizeFormatter(req.file.size,2)
                });
                image.save().then(result=>{
                    res.status(201).json({
                        message: "Image Upload successfully!",
                        data:result._id
                    })
                }).catch(error=>{
                    res.status(500).json({
                        error: error
                    });                
                })
            
    }
    catch(error){
        console.log(error);
    }
};


module.exports = {
    uploadImage
}