
import MovieCard from "./MovieCard"
const MovieScreen = ({list, page, setPage, movieList, addMovie, removeMovie}) =>{
    const movieDisplay = movieList.map((indivMovie, index)=>{
        return (
            <MovieCard list = {list} key={index} indivMovie={indivMovie} addMovie={addMovie} removeMovie={removeMovie}> </MovieCard>
        )
    })

const decrament = () => {
    setPage(page-=1)
}
const incrament = () => {
    setPage(page+=1)
}
    return(
        <div className="page">
            <h1>Tyler's Movie Theatre</h1>
            <h3>Add a movie to your watchList</h3>
            <div className="btn-container">
                {page !== 1 &&<button onClick={decrament}>Prev</button>}
                <button onClick={incrament}>Next</button>
            </div>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen