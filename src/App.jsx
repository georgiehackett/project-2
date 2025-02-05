import React, { useEffect, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';

import './App.css';

import TopRated from './Components/Movie/TopRated';
import PopularMovie from './Components/Movie/PopularMovie';
import MovieDetails from './Components/Movie/MovieDetails';
import Upcoming from './Components/Movie/Upcoming';
import NowPlaying from './Components/Movie/NowPlaying';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import FavouritesPage from './Pages/FavouritesPage';
import AllMovies from './Components/Movie/AllMovies';


const App = () => {
  const location = useLocation();
  

  const [favouriteMovies, setFavouriteMovies] = useState([{id: '', poster_path: '', title: ''}]);

  

  return (
    <>
      <Navbar />
      <Hero favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />

      <Routes>
        <Route path="/" element={<AllMovies favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />} />
        <Route path="/popularmovie" element={<PopularMovie favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />} />
        <Route path="/moviedetail/" element={<MovieDetails />} />
        <Route
          path="/toprated"
          element={<TopRated favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />}
        />
        <Route
          path="/upcoming"
          element={<Upcoming favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />}
        />
        <Route
          path="/nowplaying"
          element={<NowPlaying favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />}
        />
        <Route
          path="/favourites"
          element={<FavouritesPage favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />}
        />
      </Routes>
      {/* The lines of code below are to avoid row duplicate rendered on the App page */}
      
      {location.pathname === '/' ? (
       
        ''
      ) : (
        <AllMovies favouriteMovies={favouriteMovies}setFavouriteMovies={setFavouriteMovies} />
      )}
      {location.pathname === '/PopularMovie' ? (
        ''
      ) : (
        <PopularMovie favouriteMovies={favouriteMovies}setFavouriteMovies={setFavouriteMovies} />
      )}
      {location.pathname === '/TopRated' ? (
        ''
      ) : (
        <TopRated favouriteMovies={favouriteMovies}setFavouriteMovies={setFavouriteMovies} />
      )}
      {location.pathname === '/Upcoming' ? (
        ''
      ) : (
        <Upcoming favouriteMovies={favouriteMovies}setFavouriteMovies={setFavouriteMovies} />
      )}
      {location.pathname === '/NowPlaying' ? (
        ''
      ) : (
        <NowPlaying favouriteMovies={favouriteMovies}setFavouriteMovies={setFavouriteMovies} />
      )}
      <Footer />
    </>
  );
};

export default App;
