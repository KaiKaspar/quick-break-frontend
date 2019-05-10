import React, { Component } from 'react';
import User from './User'

class GoingUsers extends Component {

  render() {
    // debugger
    return (
      <div>
        {this.props.going.map(u => <User user={u} key={u.id} handleClick={this.props.handleClick}/>)}
      </div>
    );
  }

}

export default GoingUsers;
