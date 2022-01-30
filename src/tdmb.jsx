const API_KEY = 'edf3a4fe3374b31e8754e97afb63b043';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
* ORIGINAIS NETFLIX;
* RECOMENDADOS(TRENDING);
* EM ALTA(TOP RATED)
* AÇÃO;
* COMÉDIA;
* TERROR;
* ROMANCE;
* DOCUMENTÁRIOS
*/

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais do Netflix",
                items: await basicFetch(`/discover/tv?with_network=213&language=pr-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em alta",
                items: await basicFetch(`/trending/all/day?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&sort_by=genres_ids=28&language=pt-BR`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&sort_by=genres_ids=35&language=pt-BR`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&sort_by=genres_ids=27&language=pt-BR`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&sort_by=genres_ids=10749&language=pt-BR`)
            },
            {
                slug: "documentary",
                title: "Documentário",
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&sort_by=genres_ids=99&language=pt-BR`)
            },
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type) {
                case "movie":
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                case "tv":
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)

                break;
                default:
                    info = null;
                break;
            }
        }
        return info;
    }
}