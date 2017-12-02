import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header'
import Main from './Main';
import sampleEvents from './sampleEvents'
import sampleProfile from './sampleProfile'
import sampleAttendees from './sampleAttendees'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userProfile: {},
      eventsList: {},
      attendeesList: {}
    }
    this.loadProfile = this.loadProfile.bind(this);
    this.loadEvents = this.loadEvents.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.removeProfile = this.removeProfile.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
  }
  
  loadProfile() {
    this.setState({ userProfile: sampleProfile });
  }
  
  loadEvents() {
    const events = {...this.state.eventsList, ...sampleEvents};
    const attendees = {...this.state.attendeesList, ...sampleAttendees};
    this.setState({ eventsList: events, attendeesList: attendees })
  }

  updateProfile(profile) {
    this.setState({ userProfile: profile });
  }

  updateEvent(key, updatedEvent) {
    const events = {...this.state.eventsList};
    events[key] = updatedEvent;
    this.setState({ eventsList: events});
  }

  removeProfile() {
    this.setState({ userProfile: {} });
  }

  removeEvents() {
    this.setState({ eventsList: {}, attendeesList: {} });
  }

  addEvent(key) {
    const timeStamp = Date.now();
    const events = {...this.state.eventsList};

    events[`event-${timeStamp}`] = key;
    this.setState({eventsList: events})
  }
  
  removeEvent(key) {
    const events = {...this.state.eventsList};
    delete events[key];
    this.setState({eventsList: events})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Header 
              {...this.state} 
              loadProfile={this.loadProfile} 
              removeProfile={this.removeProfile} 
            />
            <Main 
              {...this.state} 
              loadEvents={this.loadEvents} 
              removeEvents={this.removeEvents} 
              updateProfile={this.updateProfile} 
              updateEvent={this.updateEvent}
              addEvent={this.addEvent} 
              removeEvent={this.removeEvent} 
            />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
