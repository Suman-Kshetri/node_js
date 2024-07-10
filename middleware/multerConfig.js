const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./storage')
    },
    filename:function (req,file,cb){
        // cb(mul,file.originalname)
        // cb(null,"suman"+file.originalname);
        cb(null,Date.now()+"-"+file.originalname);

    }
})
module.exports={multer,storage}

