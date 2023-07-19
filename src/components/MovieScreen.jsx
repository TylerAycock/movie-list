
import MovieCard from "./MovieCard"
const MovieScreen = ({list, page, setPage, movieList, addMovie}) =>{
    const movieDisplay = movieList.map((movie, index)=>{
        return (
            <MovieCard key={index} movie={movie} addMovie={addMovie}> </MovieCard>
        )
    })
    return(
        <div className="page">
            <h1>Tyler's Movie Theatre</h1>
            <h3>Add a movie to your watchList</h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen