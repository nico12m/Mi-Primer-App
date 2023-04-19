const express= require("express");
const router = express.Router();

const characters = require("./characters")
const favorites = require("./favorites")
const login = require("./login")

router.use(`/characters`,characters)
router.use(`/favorites`,favorites)
router.use(`/login`,login)


module.exports= router;
