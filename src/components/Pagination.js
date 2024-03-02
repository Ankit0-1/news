import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/GlobalContext'
import { CHANGE_PAGE } from '../context/actions';

function Pagination() {
  const {currentPage, data, dispatch} = useContext(MyContext);
  const [totalPages, setTotalPages] = useState();
  const pagePerPage = 6;
  
  useEffect(() => {
    const totalPages = Math.ceil(data?.length/pagePerPage);
      setTotalPages(totalPages);
  }, [data])


  const setCurrentPage = (page) => {
    console.log(page)
    dispatch({
      type: CHANGE_PAGE,
      payload: page
    })
  }
 
  return (
    <div className='pagination'>
      <ul>
        {
          totalPages && Array.from( {length :totalPages})?.map((_,i)=> {
            return  (
            <li key={i}>
              <button onClick={() => setCurrentPage(i+1)}>{i+1}</button>
            </li>
            )
          } )
        }
      </ul>
    </div>
  )
}

export default Pagination