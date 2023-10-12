import express, { Router } from 'express';
import cors from 'cors';
import data from './data.js';
import mongoose from 'mongoose';
import config from './config';
import userRouter from './routers/userRoute';

//remainig to set .env enviroemnt
//console.log(config.PORT);

mongoose
  .connect('mongodb://0.0.0.0:27017/thefashionnookdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to mongodb.');
  })
  .catch((error) => {
    console.log(error);
  });
const app =  express();
app.use(cors());

app.use('/api/users',userRouter);

app.get("/api/products",(req,res) => {
   res.send(data.products) 
});

app.get('/api/products/:id', (req, res) => {
   const product = data.products.find((x) => x._id === req.params.id);
   if (product) {
        res.send(product);
    }
  else{
       res.status(404).send({message:'product Nahi Mila !'})
   }
});
app.listen(5000,() => {
    console.log('server live at https://localhost:5000');
});