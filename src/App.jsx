import { useState, Fragment, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import axios from 'axios'
import MovieScreen from './components/MovieScreen'
import WatchList from './components/WatchList'

function App() {
  const [movieList, setMovieList] = useState([])
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  const getData = ()=>{
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=${page}`)
    .then(res=>{
      console.log(res.data.results)
      setMovieList(res.data.results)
    })
  }
useEffect(()=>{
  getData()
},[page])

const addMovie = movie => {
  console.log(movie)
  setList([...list, movie])
}

  return (
    <Fragment>
      <Header/>
      <main>
        <MovieScreen
          list = {list}
          page = {page}
          setPage = {setPage}
          movieList ={movieList}
          addMovie={addMovie}
        />
        <WatchList list={list}/>
      </main>
    </Fragment>
  )
}

export default App
