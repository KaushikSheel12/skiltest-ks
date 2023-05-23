import React from 'react'
import Header from '../components/Header'
import Instructions from '../components/Instructions'
import Quiz from '../components/Quiz'
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