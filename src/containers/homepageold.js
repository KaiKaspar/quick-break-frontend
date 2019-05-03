import React from 'react'
import { Divider, Grid, Segment } from 'semantic-ui-react'
import SignIn from '../components/SignIn'
import About from '../components/About'

const Homepage = () => (
    <div className='homepage' >
      <Grid columns={2} relaxed='very' >
        <Grid.Column >
          <About />
        </Grid.Column>
        <Grid.Column>
            <SignIn />
        </Grid.Column>
      </Grid>
    </div>
)

export default Homepage
