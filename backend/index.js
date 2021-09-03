import express from 'express';
import mongoose from 'mongoose';
import route from '../backend/route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/machstatz', route);

const port = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASE_ACCESS,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on Port ${port}`);
        });
    })
    .catch(error => {
        console.log('Error', error.message);
    })