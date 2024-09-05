import { Link } from "react-router-dom"
export const Header=()=>{
    return (
      <div className="header">
       
        <Link to="/"><span>Movie List</span></Link>
        <Link to="/favourites"><span>Favourites</span></Link>
        <Link to="/add-movie"><span>Add Movie</span></Link>
      </div>  
    )
}