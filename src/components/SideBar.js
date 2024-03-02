import React, { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/GlobalContext'
import { CHNANGE_VIEW } from '../context/actions';
import Form from './forms/Form';

function SideBar() {
  const {dispatch, viewType } = useContext(MyContext);
  const [showForm, setShowForm] = useState(false);

  const handleBoxViewChnage = (value) => {
    dispatch({
      type: CHNANGE_VIEW,
      payload: value
    })
  }
  const handleFormShow = () => {
    console.log(showForm)
    setShowForm(!showForm);
  }

  return (<>
  <div className={`${ showForm ? 'open-form side-bar' : 'side-bar'  } `}>
    <div>
    <div className='profile'>
      <img src='https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png' alt='image' />
      <div className='side-bar-content'>
        <h4>Hi Reader</h4>
        <p>Here's your News!</p>
      </div>
    </div>
    {
      !showForm ?     <div className='toggle-conatiner'>
      <h2> View Toggle</h2>
      <div className='view-type'>
        <button onClick={() => handleBoxViewChnage('GRID')} className={viewType === 'GRID' ? 'togglebtn active' :'togglebtn' }>
          Grid
        </button>
        <button onClick={() => handleBoxViewChnage('TABLE')} className={viewType === 'TABLE' ? 'togglebtn active' :'togglebtn' } >
          Table
        </button>
      </div>
    </div>  
    : <></>
    }

    <div className='feedabck-container'>
      <h2> Have a Feedback?</h2>
      <button onClick={handleFormShow} className={ showForm ? 'we-listin-btn red-color-btn' : 'we-listin-btn'}>We're Litening!</button>
    </div>
    </div>
    <div className={ showForm ?  'form-conatiner' : 'form-conatiner hide-form'}>
      <Form />
    </div>
  </div>

  </>
  )
}

export default SideBar