require('dotenv').config();


const DB_EMAIL=process.env.EMAIL || "appdenico@gmail.com"
const DB_PASSWORD=process.env.PASSWORD || "a12345"
const STATUS_OK = 200;
const STATUS_ERROR =404;

function login(req,res){
    const {password, email}= req.query;
    try {
       if(!password || !email){
        return res.status(500).json({message:"Falta contrasela o email"})
    }
    if(password === DB_PASSWORD && email === DB_EMAIL){
        return res.status(STATUS_OK).json({ access: true });
    }else{
        res.status(STATUS_OK).json({ access: false });
    } 
    } catch (error) {
        res.status(STATUS_ERROR).json({ error });
    }
    
};

module.exports= {
    login,
};