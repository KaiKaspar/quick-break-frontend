import React from 'react'
import { Redirect } from 'react-router-dom';
import UserTrips from '../components/UserTrips';
import NewTrip from '../components/NewTrip';
import { Container } from 'semantic-ui-react'

const Dashboard = (props) => (
  <Container textAlign='center'>
    <div className='dashboard' >
      {props.user.name}
      <br></br>
      <NewTrip />
      <UserTrips trips={props.user.trips}/>
    </div>
  </Container>
)

export default Dashboard
