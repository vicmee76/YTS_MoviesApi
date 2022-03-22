const url = require('url');
const helpers = require("../../helpers/helpersFunctions");
const {
    getMoviesListService
}= require("../services/get_movies_list_service");


exports.getAllMoviesList = async (req, res) => {

    let queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
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

};