
const MovieCard = ({ indivMovie, addMovie, list, removeMovie }) => {

  const addClickHandler = () => {
    console.log("adding movie!");
    addMovie(indivMovie);
  };

  const removeClickHandler = () => {
    console.log('removing movie')
    removeMovie(indivMovie);
  };

  const inWatchList = list.filter((someMovie) => {
     return someMovie.id === indivMovie.id;
  });

  const button =
    inWatchList.length === 0 ? <button onClick={addClickHandler}>ADD</button>: <button onClick={removeClickHandler}>Remove</button>

  return (
    <div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${indivMovie.poster_path}`} />
        <h2>{indivMovie.original_title}</h2>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
