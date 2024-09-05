import { Link } from "react-router-dom"
export const MovieCard=({movie,onwatchlist,watchlist})=>{

    const isMovieAdded=watchlist.find(mv => mv.id == movie.id);


    const addToWatchList=(e)=>{
        const movieId=e.target.dataset.id;
        
        onwatchlist((prev)=>{
            const favourites=[...prev,movie];
            //TODO : Fix add or remove 
            localStorage.setItem("favourites",JSON.stringify(favourites));

            return favourites; 
        });

    }
    return (
        <div className={`movie-card`}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
                <Link to={`./movie-detail/${movie.id}`}><h2>{movie.title}</h2></Link>
                <button data-id={movie.id} onClick={addToWatchList}>
                   {isMovieAdded ? "Remove from watchlist": "Add to WatchList"}
                    </button>
            </div>
            
        </div>
    )
}