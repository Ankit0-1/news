import React, { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/GlobalContext'
import { CHNANGE_VIEW } from '../context/actions';
// import Form from './Form';

function SideBar() {
  const {dispatch } = useContext(MyContext);
  const [showForm, setShowForm] = useState(false);

  const handleBoxViewChnage = (value) => {
    dispatch({
      type: CHNANGE_VIEW,
      payload: value
    })
  }
  const handleFormShow = () => {
    setShowForm(!showForm)
  }
  return (<>
  <div className={`${ showForm ? 'open-form side-bar' : 'side-bar'  } `}>
    <div className='profile'>
      <img src='https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png' alt='image' />
      <div className='side-bar-content'>
        <h4>Hi Reader</h4>
        <p>Here's your News!</p>
      </div>
    </div>
    <div className='toggle-conatiner'>
      <h2> View Toggle</h2>
      <div className='view-type'>
        <button onClick={() => handleBoxViewChnage('GRID')}>
          Grid
        </button>
        <button onClick={() => handleBoxViewChnage('TABLE')} >
          Table
        </button>
      </div>
    </div>
    <div className='feedabck-container'>
      <h2> Have a Feedback?</h2>
      <button onClick={() => handleFormShow()}>We're Litening!</button>
    </div>
    
    <div className='form-conatiner'>
      {/* <Form /> */}
    </div>
  </div>
  </>
  )
}

export default SideBar