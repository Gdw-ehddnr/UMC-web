import React from 'react'
import Tvs from '../components/Tvs';
import { tvdummy } from "../tvdummy";

    export default function Movies() {

      return (
        <div>
          <div className="movies-container">
            {tvdummy.results.map((item) => {
              return (
                <Tvs
                  name={item.name}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                />
              );
            })}
          </div>
        </div>
      )
    }

