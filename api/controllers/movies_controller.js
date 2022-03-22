const {
    getMoviesListService
}= require("../services/get_movies_list_service");


exports.getMoviesList = async (req, res) => {
    let query = { quality: "3D", limit: 5 }
    let response = await getMoviesListService(query);

    let status = response.status;

    if (status === "ok") {
        let data = response.data;
        let movie = data.movie;

        if (data.movie_count > 0) {
            res.status
        }
        else {
            // not found
        }
    }
    else {
        // something went wrong.
    }

};