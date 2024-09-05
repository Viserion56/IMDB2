import { Heading } from "./Heading"
import { MovieList } from "./MovieList"
import { MovieDetail } from "./MovieDetail"
import { AddMovie } from "./AddMovie"
import { Header } from "./Header"
import {BrowserRouter, createBrowserRouter,Route,RouterProvider, Routes} from "react-router-dom";
import { MovieFavourites } from "./MovieFavourites"
// const router=createBrowserRouter([
//     {
//         path:"/",
//         element:(
//             <>
//                 <Header/>
//                 <Heading/>
//                 <MovieList/>
//             </>
//         )

//     },
//     {
//         path:"/movie-detail/:movieID",
//         element:(
//             <>
//                 <Header/>
//                 <MovieDetail/>
//             </>
//         )

//     },
//     {
//         path:"/add-movie",
//         element:(
//             <>
//                 <Header/>
//                 <AddMovie/>
//             </>
//         )

//     }
// ])

// export const MovieApp=()=>{
//     return (
//         <RouterProvider router={router}/>    
//     )
// }

export const MovieApp=()=>{
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<><Heading/><MovieList/></>}></Route>
                <Route path="/movie-detail/:movieID" element={<MovieDetail/>}></Route>
                <Route path="/favourites" element={<MovieFavourites/>}></Route>
                
                <Route path="/add-movie" element={<AddMovie/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}