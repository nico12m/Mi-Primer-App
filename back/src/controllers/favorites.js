require('dotenv').config();

let myFavorites =[];

const STATUS_OK = 200;
const STATUS_ERROR =404;

function postFav(req,res){
    const {id, name, species, gender, image, status, origin}=req.body;
    try {
        if(!id||!name || !species || !gender || !image || !status || !origin){
            return res.status(STATUS_ERROR).json({message:"Character not found"})
        };
        const character={
            id,
            name, 
            species, 
            gender, 
            image, 
            status, 
            origin
        };
         myFavorites.push(character);
             res.status(STATUS_OK).json(myFavorites)
    } catch (error) {
         res.status(STATUS_ERROR).json({message:error})
    }

};
function deletFav(req,res){
    const {id}= req.params;
    try {
      if(!id){
        return res.status(STATUS_ERROR).json({message:"ID not found"});
    };
    const newFavorites = myFavorites.filter((elem)=> elem.id !== Number(id));
    myFavorites=newFavorites;
    res.status(STATUS_OK).json(myFavorites)  
    } catch (error) {
        res.status(STATUS_ERROR).json({message:error});
    }
    
};

module.exports={
    postFav,
    deletFav,
}