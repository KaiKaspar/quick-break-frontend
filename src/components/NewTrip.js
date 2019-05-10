import React, { Component } from 'react';
import { Input, Dropdown } from 'semantic-ui-react'

import MonthDropdown from './MonthDropdown';
import TripTypeDropdown from './TripTypeDropdown';

class NewTrip extends Component {

  state = {
    countries: [],
    name: '',
    country: '',
    city: '',
    trip_type: '',
    month: null
  }

  handleInputChange = (e, {name, value}) => {
    this.setState({
      [name]: value
    })
  }

  submit = () => {
    const { name, country, trip_type, month } = this.state
    const { selectTrip } = this.props

    if(name && country && trip_type && month !== null) {
      const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ trip: {...this.state, user_ids: [this.props.user.id]}})
      }
      fetch('http://localhost:3000/trips', config)
        .then(res => res.json())
        .then(trip => selectTrip(trip))
    } else {
      alert('Please fill in all fileds to create a trip')
    }
  }

  componentDidMount() {
    fetch(`https://restcountries.eu/rest/v2/`)
      .then(res => res.json())
      .then(countries => this.setState({ countries }))
  }

  render() {

    return (
      <div className='new-trip'>
        <h2>Start a new trip!</h2>
        <Input fluid name='name' label='Name' focus placeholder='Trip name...' onChange={this.handleInputChange} />
        <Input list='countries' placeholder='Choose a country...' fluid name='country' label='Country' onChange={this.handleInputChange}/>
          <datalist id='countries'>
            {this.state.countries.map(c => <option value={c.name} key={c.id}/>)}
          </datalist>
        <Input fluid name='city' label='City' focus placeholder='*optional' onChange={this.handleInputChange} />
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
