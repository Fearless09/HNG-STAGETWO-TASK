import './App.css';
import { useEffect, useState } from 'react';
import Homepage from './pages/Homepage';
import MovieDetails from './pages/MovieDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState([])
  // {https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
  // https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png}

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=0687dcb49bdbc30b3f8f64eed71b321a')
      .then(response => response.json())
      .then(response => setData(response.results))
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <Routes>
        <Route index element={
          <Homepage data={data} />
        } />
        <Route path='/movies/:id' element={
          <MovieDetails />
        } />
      </Routes>
    </>
  );
}

export default App;
