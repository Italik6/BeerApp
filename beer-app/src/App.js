import React, { Component } from "react";
import { DetailsContainer } from "./containers/DetailsContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BeersContainer } from "./containers/BeersContainer";
import { BeerStore } from "./stores/BeerStore";

class App extends Component {
  render() {
    let beerStore = new BeerStore();

    return (
      <Router>
        <div>
          <BeersContainer beerStore={beerStore} />
          <Switch>
            <Route
              path="/details/:postId"
              render={props => (
                <DetailsContainer {...props} beerStore={beerStore} />
              )}
            />1
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
