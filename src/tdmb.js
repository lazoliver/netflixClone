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
    getHomeList: async() => {
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
                items: await basicFetch(`/movie/top_rate?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discovery/movies?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discovery/movies?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discovery/movies?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discovery/movies?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentário",
                items: await basicFetch(`/discovery/movies?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}