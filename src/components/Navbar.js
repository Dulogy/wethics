import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="left-div"></div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search-icon"
          />
          <input placeholder="Search" />
          {/* <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div> */}
        </div>
        <div className="right-nav">
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/login">LogIn</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);
