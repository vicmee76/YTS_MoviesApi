const {
    getMoviesListService
}= require("../services/get_movies_list_service");


exports.getMoviesList = async (req, res) => {

    let response = await getMoviesListService({ quality: "3D", });
    console.log(response);
    
   
};