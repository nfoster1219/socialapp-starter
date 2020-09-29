import React from "react";
import Menu from "../components/menu/Menu";
import Layout from '../components/Layout'
import Feed from '../components/feed/Feed'
import { userIsAuthenticated } from "../redux/HOCs";
import SendPost from "../components/sendPost/SendPost";


class Profile extends React.Component {
  render() {
    return (
      <Layout>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <SendPost />
        <Feed />
      </Layout>

    );
  }
}

export default userIsAuthenticated(Profile);
