import React, { Component, Fragment } from 'react';

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css'

const tripsUrl = 'http://localhost:3000/trips/'

class Calendar extends Component {

  state = {
    selectedDays: this.props.trip.unavailable_dates.split('-').filter(d => d!== '').map(d => new Date(d))
  }

  // componentDidMount () {
  //   this.setState({
  //     selectedDays: this.props.trip.unavailable_dates.split('-').filter(d => d!== '').map(d => new Date(d))
  //   })
  // }

  modifiersStyles = {
    selected: {
      backgroundColor: 'red',
      borderRadius: 0
    }
  }

  renderDay = day => {
    const date = day.getDate();
    const dateStyle = {
      position: 'absolute',
      color: '#687864',
      bottom: 0,
      right: 0,
      fontSize: 20,
    }
    const cellStyle = {
      height: 50,
      width: 60,
      position: 'relative',
    };
    return (
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
      </div>
    );
  }

  handleDayClick = (day, {selected}) => {
    const {selectedDays} = this.state
    if (selected) {
      this.setState({selectedDays: selectedDays.filter(d => !DateUtils.isSameDay(d, day))})
    } else {
      this.setState({selectedDays: [...selectedDays, day]})
    }
  }

  handleSubmit = () => {
    const config = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        trip: {
          ...this.props.trip,
          unavailable_dates: this.state.selectedDays.join('-')
        }
      })
    }

    fetch(tripsUrl + this.props.trip.id, config)
      .then(res => res.json())
      .then(this.props.updateTripDates)
  }

  render() {
    const {month} = this.props.trip
    console.log(this.state.selectedDays)
    return (
      <Fragment>
        <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDays} modifiersStyles={this.modifiersStyles} renderDay={this.renderDay} canChangeMonth={false} month={new Date(2019, month)} />
        <button className='ui button' onClick={this.handleSubmit}>Save</button>
      </Fragment>
    )
  }

}

export default Calendar;
