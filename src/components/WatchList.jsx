
import MovieCard from './MovieCard'

const WatchList = ({list, removeMovie}) => {

    let myList = list.map((indivMovie, index) => {
        return(
            <MovieCard
                key ={index}
                indivMovie = {indivMovie}
                removeMovie={removeMovie}
                list={list}
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