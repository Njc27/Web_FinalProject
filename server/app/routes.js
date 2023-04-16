const userController = require('./controllers/userController');
const productController = require("./controllers/productController");

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
        cb(null,fileName)
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


module.exports = function (app) {

  app.post("/user/create", userController.register);
  app.post("/user/login",userController.login);
  app.get("/user/getAll", userController.getAllUsers);
  app.put("/user/edit/:email", userController.updateUsers);
  app.delete("/user/delete", userController.deleteUser);
  app.post("/products/post", upload.single('img1'),productController.post);
};

