import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react'

class NewTrip extends Component {

  render() {

    const options = [
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
    ]

    return (
      <div className='new-trip'>
        <h2>Start a new trip!</h2>
        <Input fluid label='Name*' focus placeholder='Trip name...' />
        <Form.Select fluid label='Region(optional)' options={options} placeholder='Region(optional)' />
      </div>
    );
  }

}

export default NewTrip;
