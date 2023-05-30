import React from 'react'
import Header from '../components/Header'
import Instructions from '../components/Instructions'
import Quiz from '../components/Quiz'
import { useState } from 'react'
import QInstruction from '@/pages/QInstruction'
import QSections from '@/pages/QSections'
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