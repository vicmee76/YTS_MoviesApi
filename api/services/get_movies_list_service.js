const axios = require('axios').default;

const url = 'https://yts.mx/api/v2';

module.exports = {

    getMoviesListService: async (query = null) => {
        try {
            let res = await axios.get(url + '/list_movies.json', { params: query });
            return res.data;
        }
        catch (err) {
            return await err.message;
        }
    },


    getMovieDetailsService: async (id) => {
        try {
            let res = await axios.get(url + "/movie_details.json?movie_id=" + id);
            return res.data;
        }
        catch (err) {
            return await err.message;
        }
    },

    getMovieSuggestionsService: async (id) => {
        try {
            let res = await axios.get(url + "/movie_suggestions.json?movie_id=" + id);
            return res.data;
        }
        catch (err) {
            return await err.message;
        }
    },
}