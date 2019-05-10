import React, { Component } from 'react';

import { Card } from 'semantic-ui-react'

class User extends Component {

  render() {
    return (

      <div onClick={() => this.props.handleClick(this.props.user)}>
      <Card fluid header={this.props.user.name} />
      </div>
    );
  }

}

export default User;
