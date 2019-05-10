import React, { Component } from 'react';

import { Select } from 'semantic-ui-react';

class TripTypeDropdown extends Component {

  render() {

    const types = [
      'adventure',
      'beach',
      'city',
      'ski',
      'other'
    ]

    const typeOptions = types.map(t => ({
      name: t,
      text: t,
      value: t
    }))

    return (
      <div className='dropdown-container'>
        <Select name='trip_type' placeholder='What type of trip is it?' options={typeOptions} onChange={this.props.handleInputChange} />
      </div>
    );
  }

}

export default TripTypeDropdown;
