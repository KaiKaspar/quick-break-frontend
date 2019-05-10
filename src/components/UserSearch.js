import React, { Component } from 'react';

class UserSearch extends Component {

  render() {
    const { updateSearchTerm } = this.props

    return (
      <div className="ui icon input" style={{margin: '1rem'}}>
        <i className="search icon"></i>
        <input type="text" placeholder="Search..." onChange={e => updateSearchTerm(e.target.value)}/>
      </div>
    );
  }

}

export default UserSearch;
