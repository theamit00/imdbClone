import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
              <NavLink to="/" className={({ isActive, isPending }) =>{}} >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="Logo" />
              </NavLink>
              <NavLink to="/movies/popular"> Popular </NavLink>
              <NavLink to="/movies/top_rated"> Trending </NavLink>
              <NavLink to="/movies/upcoming"> Upcoming </NavLink>
        </div>

        <div className="right">

        </div>
    </div>
  )
}

export default Navbar