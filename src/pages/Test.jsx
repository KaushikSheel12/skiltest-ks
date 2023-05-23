import React from 'react'
import Header from './Header'
import Instructions from './Instructions'
import Quiz from './Quiz'
import { useState } from 'react'

const Test = () => {
  const[isActive,setIsActive]=useState(false)
  return (
  <>
  <Header/>
  {isActive ?
   <Quiz/> :

  <Instructions setIsActive={setIsActive}/>
  }
  </>
  )
}

export default Test