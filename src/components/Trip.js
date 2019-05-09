import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

class Trip extends Component {

  render() {
    const {trip, selectTrip} = this.props

    const {name, trip_type, location, month} = trip

    let tripPic

    switch(trip_type) {
    case 'beach':
      tripPic = 'https://jetlookup.com/blog/wp-content/uploads/2016/11/perfect-destinations-for-beach-holiday-on-winter-7-900x450.jpg'
      break
    case 'city':
      tripPic = 'https://media.timeout.com/images/105404217/630/472/image.jpg'
      break
    case 'ski':
      tripPic = 'https://www.snowmagazine.com/media/reviews/photos/original/59/e6/5f/Alpe-dhuez-istock-1-40-1450092356.jpg'
      break
    case 'adventure':
      tripPic = 'https://i.ytimg.com/vi/xC5n8f0fTeE/maxresdefault.jpg'
      break
    default:
      tripPic = 'https://www.telegraph.co.uk/content/dam/Travel/2018/January/white-plane-sky.jpg?imwidth=450'
    }

    const tripMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month]

    return (
        <Card style={{background: '#F7F9FB'}} onClick={() => selectTrip(trip)}>
          <Image src={tripPic} />
          <Card.Content>
            <Card.Header>
              {name}
            </Card.Header>
            <Card.Meta>
              <span className='date'>{tripMonth}</span>
            </Card.Meta>
            <Card.Description>{location}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>
              <Icon name='user' />
              {this.props.trip.users.join(', ')}
            </p>
          </Card.Content>
        </Card>
    );
  }

}

export default Trip;
