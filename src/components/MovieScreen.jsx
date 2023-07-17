import { Fragment } from "react"

const MovieScreen = ({watchList, page, setPage, movieList}) =>{
    const movieDisplay = movieList.map((movie, index)=>{
        return (
            <h2 key={index}>{movie.original_title}</h2>
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