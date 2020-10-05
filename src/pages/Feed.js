import React from "react";
import Menu from "../components/menu/Menu";
import Layout from '../components/Layout'
import Feed from '../components/Feed/Feed'
import { userIsAuthenticated } from "../redux/HOCs";
import SendPost from "../components/SendPost/SendPost";


class Profile extends React.Component {
  render() {
    return (
      <Layout>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Feed />
      </Layout>

    );
  }
}

export default userIsAuthenticated(Profile);
