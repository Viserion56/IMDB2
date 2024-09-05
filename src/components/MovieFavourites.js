import { useEffect, useState } from "react"

let genreids={
    28:"Action",
    12:"Adventure",
    16:'Animation',
    35:'Comedy',
    80:"Crime",
    99:'Documentary',
    18:'Drama',
    10751:'Family',
    14:'Fantasy',
    36:'History',
    27:'Horror',
    10402:'Music',
    9648:'Mystery',
    10749:'Romance',
    878:'Sci-Fi',
    10770:'TV',
    53:'Thriller',
    10752:'War',
    37:'Western',
}

export const MovieFavourites=()=>{

    const [favourites,setFavourites]=useState([]);
    const [filteredFavourites,setFilteredfavourites]=useState([]);
    const [genres,setGenres]=useState([]);
    const [selectedGenre,setselectedGenre]=useState("");

    useEffect(() => {
      
        const favouritesData=JSON.parse(localStorage.getItem("favourites") || "[]");
        const genresData=favouritesData.map((data)=>data.genre_ids[0]);
        setGenres(Array.from(new Set(genresData)));
        setFavourites(favouritesData);
        setFilteredfavourites(favouritesData);
        console.log(favourites);
      
    }, [])
    
    const handleGenreSelection=(e)=>{
        const id=e.target.dataset.id;
        setselectedGenre(id);

    }
    useEffect(() => {
      
        setFilteredfavourites(()=>{
            return favourites.filter(movie=> !selectedGenre || movie.genre_ids[0] == selectedGenre);
        })
    }, [favourites,selectedGenre])
    
    const handleMovieSearch=(e)=>{
        const text=e.target.value;
          setFilteredfavourites(()=>{
            return favourites.filter((movie)=>movie.title.toLowerCase().includes(text.toLowerCase()));
          })

    }
    const handlePopularitySorting=(e)=>{
        const type=e.target.dataset.type;
     
        setFilteredfavourites(()=>{
            if(!type){
                return favourites;
            }
            
            return [...favourites].sort((a,b)=>{
                return type == "ASC"?a.popularity -b.popularity:b.popularity - a.popularity;
            });
          })

    }


    // const handleMovieDelete=(movieId)=>(e)=>{
    //     setFavourites((prevFav)=>{
    //         const movieIdx=prevFav.findIndex((mov)=>movieId === mov.id);
    //         return prevFav.filter(())
    //     })
    // }
    return (
        <div>
            <h1>Movie Favourites</h1>
            <div className="favourite-wrapper">
                <div className="left-section">
                    <div className="genre-wrapper">
                        <div className={`genre ${selectedGenre === ""?'selected':"" }`} onClick={handleGenreSelection} data-id="">All Genre </div>
                        {
                            genres.map((genreID)=>{
                                return <div className={`genre ${selectedGenre == genreID?'selected':"" }`} 
                                onClick={handleGenreSelection} data-id={genreID}>{genreids[genreID]}</div>
                            })
                        }
                       
                        
                    </div>
                </div>
                <div className='right-section'>
                        <input type="text" placeholder="search movie..." onChange={handleMovieSearch}/>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Genre</th>
                                <th>
                                <span onClick={handlePopularitySorting} data-type="">Popularity</span>
                                    <span onClick={handlePopularitySorting} data-type="ASC">  ^  </span>
                                    <span onClick={handlePopularitySorting} data-type="DSC">  v  </span>
                                    
                                    </th>
                                <th>Rating</th>
                                <th>Actions</th>
                                <th>Delete</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                           {
                            filteredFavourites.map((favourite)=>{
                                return <tr>
                                    <td><img src={`https://image.tmdb.org/t/p/w500${favourite.poster_path}` } style={{width:"80px"}}></img></td>
                                    <td>{favourite.title}</td>
                                    <td>{genreids[favourite.genre_ids[0]]}</td>
                                    <td>{favourite.popularity}</td>
                                    <td>{favourite.vote_average}</td>
                                    <td><button >delete</button></td>
                                    {/* onClick={handleMovieDelete(favourite.id)} */}
                                </tr>
                            }
                        )
                           }
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    )
}