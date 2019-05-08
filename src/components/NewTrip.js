import React, { Component } from 'react';
import { Input, Dropdown } from 'semantic-ui-react'

class NewTrip extends Component {

  state = {
    name: '',
    location: '',
    tripType: '',
    month: null
  }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  render() {

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

    const months = [
      {name: 'January', value: 0},
      {name: 'February', value: 1},
      {name: 'March', value: 2},
      {name: 'April', value: 3},
      {name: 'May', value: 4},
      {name: 'June', value: 5},
      {name: 'July', value: 6},
      {name: 'August', value: 7},
      {name: 'September', value: 8},
      {name: 'October', value: 9},
      {name: 'November', value: 10},
      {name: 'December', value: 11}
    ]

    const monthOptions = months.map(m => ({
      key: m.name,
      text: m.name,
      value: m.value
    }))



    return (
      <div className='new-trip'>
        <h2>Start a new trip!</h2>
        <Input fluid name='name' label='Name' focus placeholder='Trip name...' onChange={this.handleInputChange} />
        <Input fluid name='location' label='Location' focus placeholder='Where are you going?' onChange={this.handleInputChange} />
          <Dropdown inline selection placeholder='When do you want to go?' options={monthOptions} />
          <Dropdown inline selection placeholder='What type of trip is it?' options={monthOptions} />
      </div>
    );
  }

}

export default NewTrip;
