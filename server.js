
import dotenv from 'dotenv';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import customerRoute from './routes/customer.js';
import productRoute from './routes/products.js';
//environment variables
dotenv.config();
const PORT= process.env.PORT || 5858;

// EXPRESS INIT
const app = express();

//express middleware added
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//ejs setup
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set('layout', './layouts/full-width.ejs');
//static folder
app.use(express.static('public'));
// rotuer connect
app.use(productRoute);
app.use(customerRoute);

app.listen(PORT, ()=>{
  console.log(`Server is runing on PORT ${PORT}`);
});