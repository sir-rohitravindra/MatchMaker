import express, { response } from 'express'
import mongoose from 'mongoose'
import cards from './dbcards.js'
import cors from 'cors'

//APP Config
const app=express()
const port =process.env.PORT || 8001
const connection_url="mongodb+srv://RohitR:Imakethgames135@cluster0.vmfoi.mongodb.net/matchmakerdb?retryWrites=true&w=majority"

//Middlewares
app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
//Api endpoints
app.get('/',(req,res)=>{

    res.status(200).send("Hello world!");
})

app.post('/matchmaker/cards',(req,res)=>{

    const dbCard=req.body;
    cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});

app.get('/matchmaker/cards',(req,res)=>{

    
    cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

//Listener
app.listen(port,()=>console.log(`Listening on local host : ${port}`));

