import React, { useContext, useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { movieContext } from '../../contexts/MovieContext';
import "./Home.css"
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import Movielist from '../../components/Movielist';


const Home = () => {

  const [movies, setMovies] = useState(null);
  const {fetchMovie} = useContext(movieContext)

  useEffect(() => {
    fetchMovie("popular")
    .then((data)=> setMovies(data))
    .catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <>
      <div className="poster">
        <Carousel 
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
    >
      {movies && movies.map((movie)=>{
        return(
          <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id} >
            <div className="posterImage">
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
            </div>
            <div className="posterImage__overlay">
              <div className="posterImage__title">{movie.original_title}</div>
              <div className="posterImage__runtime">
                {movie.release_date}
                <span className="posterImage__rating">
                  {movie.vote_average.toFixed(1)}
                  {" "}<FaStar style={{color : 'yellow'}} />
                </span>
              </div>
              <div className="posterImage__description">{movie.overview}</div>
            </div>
          </Link>
        )
      })}

    </Carousel>
      </div>
      <Movielist />
    </>

  )
}

export default Home