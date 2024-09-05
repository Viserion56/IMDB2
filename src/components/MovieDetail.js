import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"

export const MovieDetail=()=>{
     const [movieDetail, setmovieDetail] = useState({});
    const params=useParams([]);
    console.log(params);
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${params.movieID}?api_key=9f48a5b363c49e0c31bf3d09bb319827`)
        .then((res)=>res.json())
        .then((data)=>setmovieDetail(data));
    },[])
    return (
        <div>
            <h1>Movie Details</h1>
            <hr/>
            <p>This is movie detail Page</p>
            <h2>{movieDetail.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}></img>
            <h6>{movieDetail.overview}</h6>
        </div>
    )
}

