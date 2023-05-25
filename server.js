import express from "express";
import cors from 'cors';
const PORT = 9090;
const app = express();
app.use(cors());

app.get('/health-check', (req, res)=>{
    try{
        return res.status(200).json({
            message:'Server health looks good, now you can go GYM 😀',
            data: {timestamp: Date.now()}
        });
    }catch(error){
        return res.status(500).json({
            message:'Server health isn\'t good, now you can\'t go GYM 😀',
            data: {timestamp: Date.now()}
        });
    }
});

app.get('/', (req, res)=>{
    try{
        return res.status(200).json({
            message:'Request sccessed ✅',
            data: {timestamp: Date.now()}
        });
    }catch(error){
        return res.status(500).json({
            message:'Request failed ❌',
            data: {timestamp: Date.now()}
        });
    }
});

app.listen(PORT,()=>{
console.log('Server is up and running 🚀🚀🚀');
});