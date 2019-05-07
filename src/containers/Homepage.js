import React from 'react'
import { Redirect } from 'react-router-dom';

import SignIn from '../components/SignIn'
import About from '../components/About'

const Homepage = ({signIn, validUser}) => (
  <div className='homepage'>
    {validUser && <Redirect to='/dashboard' />}
    <About />
    <SignIn signIn={signIn}/>
  </div>
)

export default Homepage
