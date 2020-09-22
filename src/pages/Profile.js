import React from "react";
import Menu from "../components/menu/Menu";
import UserCard from "../components/userCard/UserCard";
import Layout from '../components/Layout'
import { userIsAuthenticated } from "../redux/HOCs";


class Profile extends React.Component {
  render() {
    return (
      <Layout>
        <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <UserCard />
      </div>
      </Layout>

    );
  }
}

export default userIsAuthenticated(Profile);
