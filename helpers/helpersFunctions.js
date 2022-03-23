// function to show error messages
exports._showError = (code, res, err) => {
    return res.status(code).json({
        success: false,
        messgae: "Error : " + err
    });
};


exports._showMovieList = (movies, res, code, response) => {
    return res.status(code).json({
        success: true,
        messgae: "Success : " + response.status_message,
        movies_count: response.data.movie_count,
        limit: response.data.limit,
        page_number: response.data.page_number,
        movies: movies.map(x => {
            return {
                Id: x.id,
                url: x.url,
                title: x.title,
                year: x.year,
                rating: x.rating,
                genres: x.genres,
                imageCover: x.medium_cover_image,
                backgroundImage: x.background_image_original,
                MovieDetail: {
                    type: "GET",
                    link: "http://localhost:5300/api/movies/get-movie-detail/" + x.id
                },
                MovieSuggestions: {
                    type: "GET",
                    link: "http://localhost:5300/api/movies/get-movie-suggestions/" + x.id
                },
                MovieComment: {
                    type: "GET",
                    link: "http://localhost:5300/api/movies/get-movie-comments/" + x.id
                },
                MovieReviews: {
                    type: "GET",
                    link: "http://localhost:5300/api/movies/get-movie-reviews/" + x.id
                }

            }
        })
    });
};