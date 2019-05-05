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
    return (
      <div className="trips">
      <Card.Group centered>
        <Card style={{background: '#F7F9FB'}}>
          <Image src='https://s-ec.bstatic.com/images/hotel/max1024x768/132/132680097.jpg' />
          <Card.Content>
            <Card.Header>Maldives</Card.Header>
            <Card.Meta>
              <span className='date'>10/05/2019</span>
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
        <Card style={{background: '#F7F9FB'}}>
          <Image src='https://cdn-04.independent.ie/life/travel/article34985584.ece/85dd6/AUTOCROP/w620/iceland.jpg' />
          <Card.Content>
            <Card.Header>Iceland</Card.Header>
            <Card.Meta>
              <span className='date'>1/12/2020</span>
            </Card.Meta>
            <Card.Description>Second test holiday.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              Kai, Max
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
      </div>
    );
  }

}

export default Trip;
