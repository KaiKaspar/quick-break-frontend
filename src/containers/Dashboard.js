import React from 'react'
import UserTrips from '../components/UserTrips';
import NewTrip from '../components/NewTrip';
import { Container } from 'semantic-ui-react'

const Dashboard = ({user, selectTrip}) => (
  <Container textAlign='center'>
    <div className='dashboard' >
      <br></br>
      <NewTrip user={user} />
      <UserTrips trips={user.trips} selectTrip={selectTrip} />
    </div>
  </Container>
)

export default Dashboard
