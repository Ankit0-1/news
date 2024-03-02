import React, { useEffect } from 'react'
import SideBar from '../SideBar'
import Content from '../Content'
import Form from '../forms/Form'
import Loader from '../Loader';
import { useContext } from 'react';
import { MyContext } from '../../context/GlobalContext';
import { LOADING_STATUS } from '../../context/actions';

function HomePage() {

  const {dispatch, isLoading} = useContext(MyContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: LOADING_STATUS,
        payload: false
      })
    }, 5000)

    return () => clearTimeout(timer);
  }, [])

  return (<>
  <div className='main'>

    {
      isLoading ? <Loader /> :

     <> 
     <SideBar />
      <div className="body">
      <Content />
      </div>
      </>
    }
    
    </div>
</>
  )
}

export default HomePage