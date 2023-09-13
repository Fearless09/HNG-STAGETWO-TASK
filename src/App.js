import './App.css';
import { useEffect, useState } from 'react';
import Homepage from './pages/Homepage';
import MovieDetails from './pages/MovieDetails';
import Search from './pages/Search';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  // {https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
  // https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png}

  useEffect(() => {
    setLoading(true)
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0687dcb49bdbc30b3f8f64eed71b321a')
      .then(response => response.json())
      .then(response => {
        setData(response.results)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      });
  }, [])

  return (
    <>
      {loading && <Loading />}
      <Routes>
        <Route index element={
          <Homepage data={data} />
        } />
        <Route path='/search/:title' element={
          <Search />
        } />
        <Route path='/movies/:movie_id' element={
          <MovieDetails />
        } />
      </Routes>
    </>
  );
}

export default App;
