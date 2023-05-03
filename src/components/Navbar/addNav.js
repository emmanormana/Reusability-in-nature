import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AddNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
    <div>
    <nav>
   
    <Link to="/SellerProfile"> SellerProfile </Link>
    <Link to="/SellerItems"> seller Items</Link>
    </nav>
    </div>
    );
  }
}






















