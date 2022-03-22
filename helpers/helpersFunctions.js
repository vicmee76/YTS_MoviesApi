// function to show error messages
exports._showError = (code, res, err) => {
    return res.status(code).json({
        success: false,
        messgae: "Error : " + err
    });
};


exports._showMovieList = (movies, res, code, msg) => {
    return res.status(code).json({
        success: true,
        messgae: "Success : " + msg,
        results: movies.map(x => {
            return {
                Id: x.id,
                slug: x.slug,
                state: x.state,
                langauge: x.langauge,
                url: x.url,
                title: x.title,
                year: x.year,
                rating: x.rating,
                genres: x.genres,
                imageCover: x.medium_cover_image,
                backgroundImage: x.background_image_original,
                torrents: x.torrents.map(c => {
                    return {
                        url: c.url,
                        type: c.type,
                        quality: c.quality,
                        size: c.size,
                        uploadedAt: c.date_uploaded
                    }
                }),
            }
        })
    });
};