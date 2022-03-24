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
                    link: "http://localhost:5300/api/movies/get-movie-details/" + x.id
                },
                MovieSuggestions: {
                    type: "GET",
                    link: "http://localhost:5300/api/movies/get-movie-suggestions/" + x.id
                }
            }
        })
    });
};



exports._showMovieDetails = (movies, res, code, response) => {
    return res.status(code).json({
        success: true,
        messgae: "Success : " + response.status_message,
        movie: {
            Id: movies.id,
            url: movies.url,
            title: movies.title,
            year: movies.year,
            rating: movies.rating,
            genres: movies.genres,
            download_count: movies.download_count,
            like_count: movies.like_count,
            imageCover: movies.medium_cover_image,
            backgroundImage: movies.background_image_original,
            description: movies.description_full,
            torrents: movies.torrents?.map(c => {
                return {
                    url: c.url,
                    quality: c.quality,
                    type: c.type,
                    size: c.size,
                }
            }),
            MovieSuggestions: {
                type: "GET",
                link: "http://localhost:5300/api/movies/get-movie-suggestions/" + movies.id
            },
        }
    });
};