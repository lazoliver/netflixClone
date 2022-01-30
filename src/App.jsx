import React, { useEffect, useState } from 'react';
import Tmdb from './tdmb';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      /* pegar a lista */
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      /* filme featured */
      let originals = list.filter(i => i.slug === "originals");
      /* escolhendo um filme aleatório entre 0 e o último index */
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 14) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className='page'>

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer className="footer">
        Feito por <span role="img" aria-label="coração">❤️</span> por Wilian S. de Oliveira<br />
        <a href="https://www.linkedin.com/in/wilian-silva-de-oliveira-642387205" target="_blank" alt="LinkedIn">LinkedIn </a>
        <a href="https://github.com/lazoliver" target="_blank" alt="LinkedIn">GitHub</a><br />
        Todos os direitos reservados para Netflix.com<br />
        Dados retirados de Themoviedb.org<br />
        Desenvolvimento seguindo as aulas da B7WEB
      </footer>
    </div>
  )
}