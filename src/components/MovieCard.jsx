import './MovieCard.css'
const MovieCard = ({movie, addMovie} )=> {

    const clickHandler=()=>{
        console.log('adding movie!')
        addMovie(movie)
    }

    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                <h2>{movie.original_title}</h2>
            </div>
            <button onClick={clickHandler}>Add to List</button>
        </div>
    )
}

export default MovieCard