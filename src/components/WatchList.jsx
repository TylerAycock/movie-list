import './Watchlist.css'
import MovieCard from './MovieCard'

const WatchList = ({list}) => {

    let myList = list.map((movie, index) => {
        return(
            <MovieCard
                key ={index}
                movie = {movie}
            />
        )
    })
    return(
        <>
        <div className='watchlist'>
            <h1>My Watch List</h1>
            <div className='movie-container'>
                {myList}
            </div>
        </div>
        </>
    )
}

export default WatchList