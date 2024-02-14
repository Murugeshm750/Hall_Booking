import express from 'express'
import cors from 'cors'
import router from '../Server/Router/router.js'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
  }));
  
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/wedding-Hall.com',router)

app.listen(3000,() =>{
    console.log("PORT 3000 is Running")
})
