import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { Heading } from "./Heading";
import { Pagination } from "./Pagination";



export const MovieList = () => {
    const [Movies,setMovies]=useState([]);
    const [watchlist, updatewatchlist] = useState(()=>{
      const favourties=localStorage.getItem("favourites") || "[]";
       
        return (JSON.parse(favourties));
    });
    const fetchMovies=(pgNo)=>{
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f48a5b363c49e0c31bf3d09bb319827&page=${pgNo}`)
      .then((data)=>data.json())
      .then((data)=>setMovies(data.results || []));
    }
    const popularMovieCount = Movies.filter((movie)=>{
      return movie.popularity > 210; 
    }).length;
    useEffect(() => {
   
      fetchMovies(1);
     
  }, [])
  
    
  return (
    <>
    Total WatchList:{watchlist.length}
    <div className="movie-list">
        
      {!Movies.length && <h1>...Loading</h1>}
      {
        Movies.map((movie)=>{
          return <MovieCard movie={movie} onwatchlist={updatewatchlist} watchlist={watchlist}/>
        })
      }
        
        
    </div>
    <Pagination onPageChange={fetchMovies}/> 
    
    </>
  );
};
