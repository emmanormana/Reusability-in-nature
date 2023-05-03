import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ProfileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
    <div>
    <nav>
    
    <Link to="/home"> Home </Link>
    <Link to="/AddItems"> Add Items </Link>
    <Link to="/SellerItems"> seller Items</Link>
    </nav>
    </div>
    );
  }
}