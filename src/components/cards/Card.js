import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../../context/GlobalContext';
import { ADD_DATA } from '../../context/actions';

function Card({item, data}) {
  const {dispatch} = useContext(MyContext)

  const handleRemove = (id) => {
    const newSortedData = data.filter((item) => item.id !==  id);
    dispatch({
      type: ADD_DATA,
      payload: newSortedData
    })
  }

  const trimText = (text, maxLength) => {
    const trimmedText = text?.length >  maxLength ? text.substring(0, maxLength)+ "..." : text;
    return trimmedText;
  }

  return (  <>
<div className='card-conatiner' key={item?.id}>
  <button className='card-btn button-close' onClick={() =>handleRemove(item?.id)}>X</button>
    <div className=''>
      <h2>{trimText(item?.title, 40) }{item?.id}</h2>
      <span>{trimText(item?.body, 60)}</span>
      <p className='date-time'>Saturday 2 MArch 2024 14:26</p>
      <img alt='profile' src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'/>
    </div>
  </div>

  </>
  )
}

export default Card