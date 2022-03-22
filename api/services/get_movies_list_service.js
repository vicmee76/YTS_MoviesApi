const axios = require('axios').default;

const init = axios.create({
    baseURL: 'https://yts.mx/api/v2',
})

module.exports = {

    getMoviesListService: async (query) => {
        try {
            let res = await init.get('list_movies.json', { params: { query } });
            return res.data;
        }
        catch (err) {
            return await err;
        }
    },
}