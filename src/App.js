import React from 'react'
import HomePage from './components/pages/HomePage'
import GlobalContext, { MyContext } from './context/GlobalContext'

function App() {
  return (
    <GlobalContext>
      <HomePage />
    </GlobalContext>
  )
}

export default App