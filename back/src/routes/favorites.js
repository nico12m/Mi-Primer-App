const express = require("express");

const router= express.Router();


const {postFav, deletFav}=require("../controllers/favorites")

router.post(`/`,postFav)
router.delete(`/:id`,deletFav)

module.exports=router;