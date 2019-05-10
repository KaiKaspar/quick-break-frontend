import React, { Component } from 'react';

import AddUser from './AddUser';
import GoingUsers from './GoingUsers';

class TripUsers extends Component {

  state = {
    trip: this.props.trip,
    addUsersList: [],
    searchTerm: ''
  }

  updateSearchTerm = searchTerm => {
    this.setState({
      searchTerm
    })
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users`)
      .then(res => res.json())
      .then(users => this.setState({ addUsersList: users.filter(u => !this.state.trip.users.map(u => u.id).includes(u.id)) }))
  }

  /*addUserToTrip = user => {
    if (!this.state.going.includes(user)) {
      this.setState({
        going: [...this.state.going, user],
        users: this.state.users.filter(u => u !== user)
      })
    }
  }*/

  addUserToTrip = user => {
    if (!this.state.trip.users.includes(user)) {
      const config = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({trip: {user_ids: [...this.state.trip.users.map(u => u.id), user.id]}})
      }
      fetch('http://localhost:3000/trips/' + this.state.trip.id, config)
        .then(res => res.json())
        .then(trip => this.setState({
          trip: trip,
          addUsersList: this.state.addUsersList.filter(u => u !== user)}))
    }
  }

  removeUserFromTrip = user => {
    if (this.state.trip.users.includes(user)) {
      const config = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({trip: {user_ids: this.state.trip.users.filter(u => u.id !== user.id).map(u => u.id)}})
      }
      // debugger
      fetch('http://localhost:3000/trips/' + this.state.trip.id, config)
        .then(res => res.json())
        .then(console.log('test'))
        .then(this.setState({
          trip: {users: this.state.trip.users.filter(u => u !== user)},
          addUsersList: [...this.state.addUsersList, user]
        }))
    }
  }

  render() {
    const usersFilteredBySearch = this.state.addUsersList.filter(u => u.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    const usersNotGoing = usersFilteredBySearch

    return (
      <div className="trip-show-item">
        <h2 style={{textDecoration: "underline"}}>Going:</h2>
        <GoingUsers going={this.state.trip.users} handleClick={this.removeUserFromTrip}/>
        <br></br>
        <AddUser users={usersNotGoing} handleClick={this.addUserToTrip} updateSearchTerm={this.updateSearchTerm}/>
      </div>
    );
  }

}

export default TripUsers;
