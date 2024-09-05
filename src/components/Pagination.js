import { useCallback, useEffect, useState } from "react";

export const Pagination=({onPageChange})=>{
    const totalPages=15;
    const maxVisiblePageCount=10;
    const startingPage=1;





    const  [pages, setPages] = useState([1,2,3,4,5,6,7,8,9,10]);
     const [activepage, setactivePage] = useState(1);

     
    const getPages=useCallback((totalPages,maxVisiblePageCount,activePage)=>{

        const maxResultSize= totalPages>maxVisiblePageCount?maxVisiblePageCount:totalPages;
        const startingPage=activePage+maxResultSize>totalPages?totalPages-maxResultSize+1:activePage;
        return [...Array(maxResultSize)].map((_,idx)=>{
            return Number(startingPage)+idx;
            });
         },[]);
    const changePage=useCallback((e)=>{
        let selectedPageNumber=0;
        if(e.target.dataset.id === 'PREVIOUS'){
            selectedPageNumber=activepage-1;
        }
        else if(e.target.dataset.id === 'NEXT'){
            selectedPageNumber=activepage+1;
        } 
        else{
            selectedPageNumber=Number(e.target.dataset.id);
        }
       
        setactivePage(selectedPageNumber);
        onPageChange(selectedPageNumber);
        
    },[activepage]);

    useEffect(()=>{
        const newPage=getPages(totalPages,maxVisiblePageCount,activepage);
        setPages(newPage);
    },[activepage])
    return (
        <div className="pagination">
           <button className="page-button" disabled={activepage === 1} data-id={"PREVIOUS"} onClick={changePage}>Prev</button>

            {
                pages.map((page)=>{
                    return <button className={`page-button ${activepage == page ? ' active' : ''}`} data-id={page} onClick={changePage}>{page}</button>

                })
            }
         <button className="page-button" disabled={activepage === totalPages } data-id={"NEXT"} onClick={changePage}>Next</button>

           


        </div>
    )
}