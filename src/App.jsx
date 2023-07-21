import { useState, Fragment, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import MovieScreen from "./components/MovieScreen";
import WatchList from "./components/WatchList";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=${page}`);
      setMovieList(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [page]);

  const addMovie = (movie) => {
    console.log(movie);
    setList([...list, movie]);
  };

  const removeMovie = (movie) => {
    let newState = list.filter((someMovies) => {
      return someMovies !== movie;
    });
    setList(newState);
  };

  return (
    <Fragment>
      <Header />
      <main>
        <MovieScreen
          list={list}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <WatchList list={list} removeMovie={removeMovie} />
      </main>
    </Fragment>
  );
}

export default App;
