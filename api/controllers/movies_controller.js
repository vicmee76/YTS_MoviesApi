const url = require('url');
const helpers = require("../../helpers/helpersFunctions");

const {
    getMoviesListService,
    getMovieDetailsService,
    getMovieSuggestionsService
}= require("../services/get_movies_list_service");


exports.getAllMoviesList = async (req, res) => {
    try {
        let queryObject = url.parse(req.url, true).query;
        let response = await getMoviesListService(queryObject);
        let status = response.status;
        if (status === "ok") {
            let data = response.data;
            let movie = data.movies;
            if (data.movie_count > 0) {
                helpers._showMovieList(movie, res, 200, response);
            }
            else {
                helpers._showError(404, res, "Not found");
            }
        }
        else {
            helpers._showError(400, res, response.status_message);
        }
    }
    catch (e) {
        helpers._showError(500, res, e.message);
    }
};


exports.getMovieDetails = async (req, res) => {
    try {
        let id = req.params.id
        if (id > 0) {
            let response = await getMovieDetailsService(id);
            let status = response.status;
            if (status === "ok") {
                let data = response.data;
                if (data !== null) {
                    let movie = data.movie;
                    helpers._showMovieDetails(movie, res, 200, response);
                }
                else {
                    helpers._showError(404, res, "Not found");
                }
            }
            else {
                helpers._showError(400, res, response.status_message);
            }
        }
        else {
            helpers._showError(400, res, "Invalid movie id parsed");
        }
    }
    catch (err) {
        helpers._showError(500, res, err.message);
    }
    
};


exports.getMovieSuggestions = async (req, res) => {
    try {
        let id = req.params.id
        if (id > 0) {
            let response = await getMovieSuggestionsService(id);
            let status = response.status;
            if (status === "ok") {
                let data = response.data;
                if (data !== null) {
                    let movie = data.movies;
                    helpers._showMovieList(movie, res, 200, response);
                }
                else {
                    helpers._showError(404, res, "Not found");
                }
            }
            else {
                helpers._showError(400, res, response.status_message);
            }
        }
        else {
            helpers._showError(400, res, "Invalid movie id parsed");
        }
    }
    catch (err) {
        helpers._showError(500, res, err.message);
    }
};