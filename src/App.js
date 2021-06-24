import React from "react";

import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import List from "./components/post/List";
import GetOne from "./components/post/GetOne";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route component={List} exact path="/posts" />
          <Route component={GetOne} exact path="/posts/:postID" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
