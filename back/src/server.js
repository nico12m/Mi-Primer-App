const server =require("./app");
const PORT = process.env.PORT || 3001

server.listen(PORT,()=>{
    console.log(`se levanto el servidor en: http://localhost:${PORT}`)
});



























// const http = require("http");
// const PORT = 3001;
// const getCharById = require(`../controllers/getCharById`)
// const getCharDetail =require(`../controllers/getCharDetail`)

// http.createServer((req,res)=>{
//     res.setHeader(`access-Control-Allow-Origin`,`*`);
//     let id= req.url.split(`/`).at(-1);
//     if(req.url.includes(`onsearch`)){
//         getCharById(res,id)
//     };

//     if(req.url.includes(`detail`)){
//         getCharDetail(res,id)
//     }
// }).listen(PORT,"localhost")