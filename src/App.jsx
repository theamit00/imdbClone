import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css'
import Home from './pages/Home/Home';
import MovieContext from './contexts/MovieContext';
import Movielist from './components/Movielist';
import MovieDetail from './pages/MovieDetail/MovieDetail';

const App = () => {
  return (
    <div className='App'>

      <MovieContext>
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetail />} />
            <Route path='/movies/:list' element={<Movielist />} />
            <Route path='/*' element={<h1>Error Page</h1>} />
          </Routes>
        </Router>
      </MovieContext>
      
    </div>
  )
}

export default App