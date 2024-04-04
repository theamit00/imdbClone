import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import { movieContext } from '../contexts/MovieContext';

import './Movielist.css'

const Movielist = () => {
    const [movies, setMovies] = useState(null);
    const { fetchMovie } = useContext(movieContext)
    const {list} = useParams();
    let type = list ? list : 'popular';

    useEffect(() => {

        fetchMovie(type)
            .then((data) => setMovies(data))
            .catch((err) => console.log(err))

    }, [type])

    return (
        <>

            <main className="movie__list">
                <h2 className="list__title">{(type === 'top_rated' ? 'trending' : type).toUpperCase()}</h2>
                <div className="list__cards">
                    {
                        movies && movies.map((movie,index) => <Card movie={movie} key={index} /> )
                    }
                </div>
            </main>


        </>
    )
}

export default Movielist