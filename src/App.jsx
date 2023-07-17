import { useState, Fragment, useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import axios from 'axios'
import MovieScreen from './components/MovieScreen'

function App() {
  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
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
  return (
    <Fragment>
      <Header/>
      <main>
        <MovieScreen
          watchList = {watchList}
          page = {page}
          setPage = {setPage}
          movieList ={movieList}
        />
      </main>
    </Fragment>
  )
}

export default App
