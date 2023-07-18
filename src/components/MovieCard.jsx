import './MovieCard.css'
const MovieCard = ({movie} )=> {
    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                <h2>{movie.original_title}</h2>
            </div>
            <button>Add</button>
        </div>
    )
}

export default MovieCard