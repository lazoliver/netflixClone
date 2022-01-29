import React, { useEffect, useState } from 'react';
import Tmdb from './tdmb';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      /* pegar a lista */
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className='page'>
      <section className='list'>
        {movieList.map((item, key) => (
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  )
}