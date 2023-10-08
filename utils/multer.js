import multer from 'multer';

//disk storage setup
const storage=multer.diskStorage({
  destination:(req, file, cb)=>{
    if (file.fieldname=="userCv") {
      cb(null, "public/cv" );
    }else if(file.fieldname=="customerPhoto"){
      cb(null, "public/custoemr" );
    }else if(file.fieldname=="staffPhoto"){
      cb(null, "public/staff" );
    }else if(file.fieldname=="productPhoto"){
      cb(null, "public/product" );
    }else if(file.fieldname=="userPhoto"){
      cb(null, "public/user" );
    }
  },
  filename:(req, file, cb)=>{
    cb(null, Date.now() +"_"+ Math.floor(Math.random()*1000) +"_"+ file.originalname);
  }
})

export const createPhotoMulter=multer({storage}).single("productPhoto");