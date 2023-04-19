const express = require("express");
const app= express();
const logger= require("morgan");

const allRoutes = require("./routes/index.js");


app.use(express.json());

const urlencoded = express.urlencoded({extended:false});



app.use((req,res,next)=>{
    res.header(`Access-Control-Allow-Origin`,`*`); //autorizo a todos los dominions con *
    res.header(`Access-Control-Allow-Credentials`,true);
    res.header(`Access-Control-Allow-Headers`,
    "Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(logger("dev"));

app.use("/rickandmorty",allRoutes);

app.get("/",(req,res)=>{
    res.status(200).json({message: " Estas en el server de Express creado por Nicolas Mojavik",app:"Rick and Morty"})
});

module.exports= app;