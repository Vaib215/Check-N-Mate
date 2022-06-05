import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../components/layout/Signin'
import Signup from '../components/layout/Signup'

const Auth = () => {
  return (
    <Routes>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Auth