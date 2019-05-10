import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

import MonthDropdown from './MonthDropdown';
import TripTypeDropdown from './TripTypeDropdown';

class NewTrip extends Component {

  state = {
    name: '',
    location: '',
    tripType: '',
    month: null
  }

  handleInputChange = (e, {name, value}) => {
    this.setState({
      [name]: value
    })
  }

  submit = () => {
    const { name, location, tripType, month } = this.state
    if(name && location && tripType && month !== null) {
      const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ trip: {...this.state, user_ids: [this.props.user.id]}})
      }
      fetch('http://localhost:3000/trips', config)
        .then(res => res.json())
        .then(console.log)
    } else {
      alert('Please fill in all fileds to create a trip')
    }
  }

  render() {

    return (
      <div className='new-trip'>
        <h2>Start a new trip!</h2>
        <Input fluid name='name' label='Name' focus placeholder='Trip name...' onChange={this.handleInputChange} />
        <Input fluid name='location' label='Location' focus placeholder='Where are you going?' onChange={this.handleInputChange} />
        <MonthDropdown handleInputChange={this.handleInputChange}/>
        <TripTypeDropdown handleInputChange={this.handleInputChange}/>
        <button className='ui button' onClick={this.submit} >Let's go!</button>
      </div>
    );
  }

}

export default NewTrip;


{/*const options = [
  { key: 'af', text: 'Africa', value: 'Africa' },
  { key: 'as', text: 'Asia', value: 'Asia' },
  { key: 'ca', text: 'Central America', value: 'Central America' },
  { key: 'ee', text: 'Eastern Europe', value: 'Eastern Europe' },
  { key: 'eu', text: 'European Union', value: 'European Union' },
  { key: 'me', text: 'Middle East', value: 'Middle East' },
  { key: 'na', text: 'North America', value: 'North America' },
  { key: 'oc', text: 'Oceania', value: 'Oceania' },
  { key: 'sa', text: 'South America', value: 'South America' },
  { key: 'cb', text: 'Caribbean', value: 'Caribbean' },
  ]*/}
