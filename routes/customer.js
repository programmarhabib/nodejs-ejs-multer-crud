import express from 'express';
import { createCustomer } from '../controllers/customerController.js';
import multer from "multer";

//init router
const router = express.Router();
//multer setup
const storage =multer.diskStorage({
  destination: (req, file, cb)=>{
      cb(null, './public')
  },
  filename:(req, file, cb)=>{
      cb(null, Date.now() +"_"+ Math.floor(Math.random()*1000) +"_"+ file.originalname);
  }
})
const customerFileUploader=multer({storage:storage});
/**
 * custoemr create rout
 * */ 
router.post('/customer',customerFileUploader.single("photo"), createCustomer);

//export default router
export default router;