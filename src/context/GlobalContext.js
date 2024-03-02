import React, { createContext, useReducer } from 'react'
import {CHANGE_PAGE, ADD_DATA, CHNANGE_VIEW, LOADING_STATUS} from './actions'

export const MyContext = createContext();

const reducer = (state, action) => {
  switch (action.type){
    case ADD_DATA:
      return { ...state, data: action.payload}
    case CHANGE_PAGE :
      return {...state, currentPage: action.payload }
    case CHNANGE_VIEW:
      console.log(action.payload) 
      return {...state, viewType: action.payload}
    case LOADING_STATUS:
      return {...state, isLoading: action.payload}
    default :
      return state;
  }
}

const initialState = {
    data: [],
    currentPage: 1,
    viewType: "GRID",
    isLoading: true
}
function GlobalContext({children}) {
    const [state, dispatch ] = useReducer(reducer, initialState);

    const fetchData = async() => {
      try{
      const result = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data  = await result.json();

        dispatch({
          type: ADD_DATA,
          payload: 
            data
        })
      } catch{
        console.log('something went wrong');
      }
    }
  return (<MyContext.Provider value={{...state, dispatch, fetchData}}>
    {children}
  </MyContext.Provider>
    
  )
}

export default GlobalContext;