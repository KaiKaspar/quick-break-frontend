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

    let tripPic

    switch(this.props.trip.trip_type) {
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

    let tripMonth

    switch(this.props.trip.month) {
    case 1:
      tripMonth = 'January'
      break
    case 2:
      tripMonth = 'Febuary'
      break
    case 3:
      tripMonth = 'March'
      break
    case 4:
      tripMonth = 'April'
      break
      case 5:
        tripMonth = 'May'
        break
      case 6:
        tripMonth = 'June'
        break
      case 7:
        tripMonth = 'July'
        break
      case 8:
        tripMonth = 'August'
        break
        case 9:
          tripMonth = 'September'
          break
        case 10:
          tripMonth = 'October'
          break
        case 11:
          tripMonth = 'November'
          break
    default:
      tripMonth = 'December'
    }

    const {name, start_date, duration, trip_type, location} = this.props.trip

    return (
        <Card style={{background: '#F7F9FB'}}>
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
            <a>
              <Icon name='user' />
              {this.props.trip.users.join(', ')}
            </a>
          </Card.Content>
        </Card>
    );
  }

}

export default Trip;
