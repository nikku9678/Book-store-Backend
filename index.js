import express from 'express';
import bookRoute from './routes/bookRoute.js';
// import {PORT,MONGOURL} from './config.js'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app= express();
app.use(express.json());
app.use(cors());
app.use('/books', bookRoute);

app.get('/', (req,res)=>{
    res.send("Hello");
})



// mongodb connects
mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log('Connected to MongoDB 2');
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(`${error}`)
})