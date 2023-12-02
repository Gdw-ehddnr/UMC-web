import React from 'react'
import Movie from '../components/movie';
import { dummy } from "../movieDummy고동";

export default function Movies() {

  return (
    <div>
      <div className="movies-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              overview={item.overview}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  )
}