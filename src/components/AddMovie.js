import {useState,useRef} from 'react';
export const AddMovie=()=>{
    const nameRef = useRef();
    const ratingRef=useRef();
    const handleSubmit=()=>{
        console.log(nameRef.current.value);
    };
    return (
        <div className="add-movie-form">
            <h1>Add Movie</h1>
            <div>
                <input placeholder="Add new movie name" ref={nameRef}/>

            </div>
            <div>
                <input type="number" placeholder="Enter rating" ref={ratingRef}/>
            </div>
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}