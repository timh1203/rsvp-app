import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-datetime'

import '../style/style.css'
import '../style/react-datetime.css'

class UpdateEvents extends Component {
  removeEvent = (e, key) => {
    const event = key;
    this.props.deleteEvent(event);
  }

  handleChange = (e, key) => {
    const event = this.props.eventsList[key];
    const updatedEvent = {
      ...event,
      [e.target.name] : e.target.value
      // eventName: this.eventName.value,
      // date: dateExtract,
      // date: this.date.value,
      // time: timeExtract,
      // time: this.time.value,
      // location: this.location.value,
      // details: this.details.value,
      // creator: this.creator.value,
    }
    this.props.updateEvent(key, updatedEvent);
  }

  renderEvents = (key) => {
    const event = this.props.eventsList[key];
    return(
      <div className="renderEvents" key={key}>
          <input type="text" name="eventName" defaultValue={event.eventName} placeholder="Event Name" onInput={(e) => this.handleChange(e, key)} required />
          {/* <Calendar dateFormat='MMMM Do, YYYY' timeFormat={false} type="date" name="date" onInput={event.date} placeholder="Date" onChange={(e) => this.handleChange(e, key)} required /> */}
          <input type="text" name="date" defaultValue={event.date} placeholder="Date" onChange={(e) => this.handleChange(e, key)} required />
          {/* <Calendar timeFormat='h:mm a' dateFormat={false} type="text" name="time" defaultValue={event.time} placeholder="Time" onChange={(e) => this.handleChange(e, key)} required /> */}
          <input type="text" name="time" defaultValue={event.time} placeholder="Time" onChange={(e) => this.handleChange(e, key)} required />
          <input type="text" name="location" defaultValue={event.location} placeholder="Location" onChange={(e) => this.handleChange(e, key)} required />
          <textarea type="text" name="details" defaultValue={event.details} placeholder="Details" onChange={(e) => this.handleChange(e, key)} required />
          <button onClick={(e) => this.removeEvent(e, key)}>Remove Event</button>
      </div>
    )
  }

  render() {
    return (
      <div className="renderEvents">
        <button type="submit" onClick={this.props.toggleUpdateEvents}>Update Events</button>
        {this.props.showUpdateEvents ? (Object.keys(this.props.eventsList).map(this.renderEvents)) : null}
      </div>
    )
  }
}  

export default UpdateEvents