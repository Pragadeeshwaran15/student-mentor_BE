import express from "express";
import AppRoutes from './routes/index.js'
import dotenv from 'dotenv'
import corc from 'croc'
// import cors from 'cors'
dotenv.config()

const app = express();
const PORT = process.env.PORT;
app.use(corc())
app.use(express.json())
app.use('/', AppRoutes)

app.listen(PORT, () => console.log(`App is listening port ${PORT}`));