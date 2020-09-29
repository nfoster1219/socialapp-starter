import React from "react";
import Menu from "../components/menu/Menu";
import Layout from '../components/Layout'
import { userIsAuthenticated } from "../redux/HOCs";
import SendPost from "../components/sendPost/SendPost";
import Feed from "../components/feed/Feed"

class Profile extends React.Component {
  render() {
    return (
      <Layout>
        <div>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Feed</h2>
        <SendPost />
        <Feed />
      </div>
      </Layout>

    );
  }
}

export default userIsAuthenticated(Profile);
