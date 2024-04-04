import { createContext} from "react";
import axios from 'axios'

export const movieContext = createContext(null);

async function fetchMovie (type){
    let data = null;
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_AUTHORIZATION_KEY}`
      }
    };

    try {
      const response = await axios.request(options)
      return data = response.data.results;
    } catch (error) {
      console.log(error);
      return data;
    } 
}

async function fetchSingleMovie (id){
  let data = null;
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_AUTHORIZATION_KEY}`
    }
  };

  // console.log(import.meta.env.VITE_MOVIEDB_AUTHORIZATION_KEY)

  try {
    const response = await axios.request(options)
    return data = response.data;
  } catch (error) {
    console.log(error);
    return data;
  } 
}

const value = {
  fetchMovie,
  fetchSingleMovie
}

const MovieContext = ({children}) => {
  return (
    <movieContext.Provider value={value}>
      {children}
    </movieContext.Provider>
  )
}

export default MovieContext