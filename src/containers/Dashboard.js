import React from 'react'
import { Redirect } from 'react-router-dom';
import UserTrips from '../components/UserTrips';
import NewTrip from '../components/NewTrip';
import { Container } from 'semantic-ui-react'

const Dashboard = ({routerProps, user}) => (
  <Container textAlign='center'>
    <div className='dashboard' >
      <br></br>
      <NewTrip user={user} routerProps={routerProps} />
      <UserTrips />
    </div>
  </Container>
)

export default Dashboard
