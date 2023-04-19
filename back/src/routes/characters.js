const express = require("express");

const router= express.Router();


const {getCharById}=require("../controllers/characters")

router.get("/:id",getCharById)

module.exports=router;