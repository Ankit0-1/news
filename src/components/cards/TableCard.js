import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../../context/GlobalContext';
import { ADD_DATA } from '../../context/actions';

function CapsuleCard({item, data}) {
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
  <div className='profile-card' key={item?.id}>
    <div className='card-content'>
    <img alt='profile' src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'/>
    <div className='capsule-body'>
    <h2>{trimText(item?.title, 400)}</h2>
    <span>{trimText(item?.body, 400)}</span>
    <p className='date-time'>Saturday 2 MArch 2024 14:26</p>
      </div>
    </div>
    <button className='button-close' onClick={() =>handleRemove(item?.id)}>X</button>
  </div>
  </>
  )
}

export default CapsuleCard
