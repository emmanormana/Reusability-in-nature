import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AdminItemsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
    <div>
    <nav>
   
    <Link to="/AdminProfile"> Profile </Link>
    <Link to="/" onClick={() => {localStorage.removeItem('token'); localStorage.removeItem('user_id'); window.location='/'}}> Sign out </Link>
    </nav>
    </div>
    );
  }
}