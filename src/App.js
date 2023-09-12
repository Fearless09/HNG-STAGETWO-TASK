import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
import Homepage from './components/Homepage';

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
      <Homepage data={data} />
    </>
  );
}

export default App;
