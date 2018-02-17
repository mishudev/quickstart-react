import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Home</Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" key={1}>
            <Link to="/feature" className="nav-link">Feature</Link>
          </li>
        </ul>
      </nav>
    )
  }
}