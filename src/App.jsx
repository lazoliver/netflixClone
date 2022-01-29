import React, { useEffect, useState } from 'react';
import tmdb from './tdmb';

export default () => {

  const [ movieList, setMovieList ] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      /* pegar a lista */
      let list = await tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}