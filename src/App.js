import React from 'react'
import { Route, Routes } from 'react-router-dom'

import lozad from 'lozad'

//context
import StateContextProvider from './Context/StateContextProvider'

//components
import Home from './Components/Home/Home'
import HomeShowMovies from './Components/ShowMovies/HomeShowMovies'
import DetailsMovie from './Components/ShowMovies/Details/DetailsMovie'

const App = () => {
  const el = document.querySelectorAll('img');
  const observer = lozad(el);
  observer.observe();
  document.title = "Movie Collection"

  return (
    <StateContextProvider>
      <Routes>
        <Route path='/show-movies/:id' element={<DetailsMovie />} />
        <Route path='/show-movies' element={<HomeShowMovies />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </StateContextProvider>
  )
}

export default App