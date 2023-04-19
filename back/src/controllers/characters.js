const axios =require("axios");

require('dotenv').config();

const URL= process.env.API_URL||"https://rickandmortyapi.com/api/character/";


const STATUS_OK = 200;
const STATUS_ERROR =404;

function getCharById(req,res){

    const {id}=req.params;

    try{
        axios.get(`${URL}${id}`).then(({data}) => {
            if(data){
                const character={
                    id: data.id,
                    name: data.name,
                    status: data.status,
                    species: data.species,
                    origin: data.origin?.name,
                    image: data.image,
                    gender: data.gender
                };
                 res.status(STATUS_OK).json(character);
            } else {
                res.status(STATUS_ERROR).json({message:"character not found"});
            }
            });
         } catch(error){
            res.status(500).json({message: error});
         }
};
















// const getCharById=(res,id)=>{
//     axios(`${URL}${id}`)
//         .then(result=>result.data)
//         .then(data=>{
//             let character={
//                 id:data.id,
//                 name:data.name,
//                 image:data.image,
//                 gender:data.gender,
//                 species:data.species
//             };
//             res.writeHead(200,{"content-type":"application/json"})
//             .end(JSON.stringify(character))
//         })
//         .catch(err=>res.writeHead(500,{"content-type":"text/plain"})
//         .end(`El personaje con ${id} no fue encontrado`)
//         )
// };

module.exports={
    getCharById,
}