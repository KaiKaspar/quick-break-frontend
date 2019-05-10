import React from 'react'

import SignIn from '../components/SignIn'
import About from '../components/About'

const Homepage = ({signIn, createUser, validUser, routerProps}) => (
  <div className='homepage'>
    {validUser && routerProps.history.push('/user-screen')}
    <About />
    <SignIn signIn={signIn} createUser={createUser}/>
  </div>
)

export default Homepage
