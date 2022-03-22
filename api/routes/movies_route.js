const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies_controller");

router.get('/', moviesController.getMoviesList);

module.exports = router;