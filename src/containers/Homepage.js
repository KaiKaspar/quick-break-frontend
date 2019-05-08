import React from 'react'

import SignIn from '../components/SignIn'
import About from '../components/About'

const Homepage = ({signIn, validUser, routerProps}) => (
  <div className='homepage'>
    {validUser && routerProps.history.push('/dashboard')}
    <About />
    <SignIn signIn={signIn}/>
  </div>
)

export default Homepage
