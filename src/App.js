import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import MessageFeed from "./pages/MessageFeed"
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Switch>
         <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/profile/:username"
          component={Profile}
        />
         <Route
          exact
          path="/messagefeed"
          component={MessageFeed}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    );
  }
}

export default App;
