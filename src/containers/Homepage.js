import React from 'react'

import SignIn from '../components/SignIn'
import About from '../components/About'

const Homepage = ({signIn}) => (
    <div className='homepage' >
          <About />
          <SignIn signIn={signIn}/>
    </div>
)

export default Homepage
