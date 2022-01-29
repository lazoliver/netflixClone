import React, { useEffect } from 'react';
import tmdb from './tdmb';

export default () => {

  useEffect(() => {
    const loadAll = async () => {
      /* pegar a lista */
      let list = await tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}