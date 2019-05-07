import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class Trip extends Component {

  /*state = {
    tripName: props.trip.name,
    tripLocation: props.trip.location,
    tripDate: props.trip.date,
    tripUsers: props.trip.users
  }*/


  render() {

    const {name, start_date} = this.props.trip

    return (
        <Card style={{background: '#F7F9FB'}}>
          <Image src='https://s-ec.bstatic.com/images/hotel/max1024x768/132/132680097.jpg' />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className='date'>{start_date || 'TBD'}</span>
            </Card.Meta>
            <Card.Description>First test holiday</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              Kai, Max
            </a>
          </Card.Content>
        </Card>
    );
  }

}

export default Trip;
