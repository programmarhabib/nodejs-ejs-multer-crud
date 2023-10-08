
import express from 'express';

import { adminPage, createProductPage, createproducts, deleteSingleproduct, editPage, getAllproducts, getSingleproduct, productPage, singlePage, updateSingleProduct } from '../controllers/productController.js';
import { createPhotoMulter } from '../utils/multer.js';

// router init
const router = express.Router();





//product rout
router.get("/", productPage);
router.get("/product", getAllproducts);

router.get("/admin", adminPage);
router.get("/create", createProductPage);
router.get("/single/:slug", singlePage);
router.get("/product/:slug", getSingleproduct);
router.get("/productdel/:id", deleteSingleproduct);
router.post("/update/:id", createPhotoMulter, updateSingleProduct);
router.get("/edit/:id", editPage);
router.post("/product", createPhotoMulter, createproducts);

// export router
export default router;