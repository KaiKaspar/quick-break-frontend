import React, { Component } from 'react';

import UserSearch from './UserSearch';
import User from './User';

class AddUser extends Component {

  render() {
    return (
      <div>
        <h2 style={{textDecoration: "underline"}}>Add User:</h2>
        <UserSearch updateSearchTerm={this.props.updateSearchTerm}/>
        {this.props.users.map(u => <User user={u} key={u.id} handleClick={this.props.handleClick}/>)}
      </div>
    );
  }

}

export default AddUser;
