import jsonpPromise from 'jsonp-es6';

export default function movieApi({ tmdbApiKey, omdbApiKey }) {
    const TMDB_API_KEY = tmdbApiKey;
    const OMDB_API_KEY = omdbApiKey;

    const movieApi = {
        getMovieTitleQueryFromTMDBQuery(query) {
            const movieQuery = `https://api.themoviedb.org/3/search/movie/?api_key=${TMDB_API_KEY}&query=${query}`;
            return jsonpPromise(movieQuery)
                .then(resolve => {
                    return resolve;
                });
        },
        getMovieDataFromTMDBid(movieId) {
            const query = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`;
            return jsonpPromise(query)
                .then(resolve => {
                    return resolve;
                });
        },
    };

    return movieApi;
}
