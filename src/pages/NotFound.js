import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu/Menu"

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <Menu />
        <p>Page not found for {this.props.location.pathname}</p>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
