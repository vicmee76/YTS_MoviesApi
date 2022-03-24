const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies_controller");

router.get('/', moviesController.getAllMoviesList);
router.get('/get-movie-details/:id', moviesController.getMovieDetails);

module.exports = router;