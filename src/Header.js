import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import CurrentProfile from './CurrentProfile'

class Header extends Component {
    render() {
      return (
        <div>
          <header>
            <CurrentProfile {...this.props}/>

            {/* <div>
              <p><Link to='/'>Show Events</Link></p>
              <p><Link to='/add-profile'>Add Profile</Link></p>
              <p><Link to='/add-event'>Add Event</Link></p>
            </div> */}

            <hr id="divider" />
          </header>
        </div>
      )
    }
  }

export default Header;


