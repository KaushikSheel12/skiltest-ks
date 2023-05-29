import React from 'react'
import Header from '../components/Header'
import Instructions from '../components/Instructions'
import Quiz from '../components/Quiz'
import { useState } from 'react'
import QInstruction from '@/components/QInstruction'
import QSections from '@/components/QSections'
import Result from '@/components/Result'


const Test = () => {
  const[isActive,setIsActive]=useState(false)
  return (
  <>
  <Header/>
  {/* {isActive ?
   <Quiz/> :

  <Instructions setIsActive={setIsActive}/>
  } */}

<Result/>

  {/* <QInstruction/> */}
  {/* <QSections/> */}
  </>
  )
}

export default Test