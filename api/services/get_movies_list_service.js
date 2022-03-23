const axios = require('axios').default;

const url = 'https://yts.mx/api/v2';

module.exports = {

    getMoviesListService: async (query = null) => {
        try {
            let res = await axios.get(url + '/list_movies.json', { params: query });
            return res.data;
        }
        catch (err) {
            return await err;
        }
    },
}