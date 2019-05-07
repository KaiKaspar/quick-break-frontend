import React, { Component, Fragment } from 'react';

import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css'

class Calendar extends Component {

  state = {
    selectedDays: []
  }

  modifiersStyles = {
    selected: {
      backgroundColor: 'red',
      borderRadius: 0
    }
  }

  handleDayClick = (day, {selected}) => {
    const {selectedDays} = this.state
    if (selected) {
      const selectedIndex = selectedDays.indexOf(day)
      this.setState({selectedDays: selectedDays.filter(d => !DateUtils.isSameDay(d, day))})
    } else {
      this.setState({selectedDays: [...selectedDays, day]})
    }
  }

  renderDay = day => {
    const date = day.getDate();
    const dateStyle = {
      position: 'absolute',
      color: 'lightgray',
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

  testHandler = () => {
    debugger
  }

  render() {
    return (
      <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDays} modifiersStyles={this.modifiersStyles} renderDay={this.renderDay} canChangeMonth={false} month={new Date(2019, 5)} />
    );
  }

}

export default Calendar;
