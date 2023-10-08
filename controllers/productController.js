
import fs from 'fs';
import { createSlug, randomId } from '../helpers/helpers.js';

/**
 * all product show here
 * */ 
export const getAllproducts=(req, res)=>{
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
  if (productData.length==0) {
    res.status(404).json({message: "Product not found"});
    return;
  }
  res.status(200).json({products:productData})
}

/**
 * delete Single product
*/
export const deleteSingleproduct=(req, res)=>{
   const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    const {id} = req.params
    const updateData=productData.filter((data)=>data.id!==id) ;
    fs.writeFileSync("db/product.json", JSON.stringify(updateData));
    
    res.redirect('/');
}

/**
 * Single product hsow
*/
export const getSingleproduct=(req, res)=>{
   const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    const {slug} = req.params
    const singledata=productData.find((data)=>data.slug==slug) ;
    if (!singledata) {
      res.status(404).json({message:"Single product not found"});
      return;
    }
    res.status(200).json(singledata);
}
/**
 * create single product
 * */ 
export const createproducts=(req, res)=>{
    const {name, regularPrice,salePrice,stock}=req.body;

  if(!name || !regularPrice){
    return res.status(400).json({message: "Name and ruglarprice is requird"});
  }


    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    if (productData.some((data)=>data.slug==createSlug(name))) {
      return res.status(400).json({message: "Product name already exist"});
    }
    const product={
      id:randomId,name,slug:createSlug(name), regularPrice, salePrice, stock, photo:req.file.filename,
    }
    productData.push(product);
    fs.writeFileSync("db/product.json", JSON.stringify(productData));
    console.log("Habib");

    res.redirect('/');
    
}


/**
 * shop page render
*/
export const shopPage=(req, res)=>{
    res.render('shop')
}
/**
 * admin page render
*/
export const adminPage=(req, res)=>{
    res.render('admin', {
      name:"Habib",
      skill:"Blockchain",
      age: 18,
    })
}

/**
 * product page render
*/
export const productPage=(req, res)=>{
  // get all products
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    res.render('product', {
      products: productData,
    })
}

/**
 * create page render
*/
export const createProductPage=(req, res)=>{
    res.render('create')
}
/**
 * single page render
*/
export const singlePage=(req, res)=>{
  const {slug} = req.params;
   // get all products
   const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
  
   // find single product
   const singleProduct = productData.find(data => data.slug== slug)

    res.render('single', {
      product: singleProduct,
    })
}
/**
 * edit page render
*/
export const editPage=(req, res)=>{
  const {id} = req.params;
   // get all products
   const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
  
   // find single product
   const editProduct = productData.find(data => data.id== id)

    res.render('edit', {
      product: editProduct,
    })
}
/**
 * update page render
*/
export const updateSingleProduct=(req, res)=>{
  const {id} = req.params;
  const {name, regularPrice, salePrice,stock, photo} = req.body;
   // get all products
   const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
  
//photo manage
let photo_name =productData[productData.findIndex(data=>data.id === id)].photo
if (req.file?.filename ) {
  photo_name = req.file.filename
}

   productData[productData.findIndex(data=>data.id === id)] = {
    id:id,
    name,
    slug:createSlug(name),
    regularPrice,
    salePrice,
    stock,
    photo:photo_name
   }

   fs.writeFileSync("db/product.json", JSON.stringify(productData));
   res.redirect('/')
}