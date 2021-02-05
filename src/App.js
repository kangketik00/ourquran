import { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setSurahs } from "./actions/surahs";
import { setAsmaulhusna } from "./actions/asmaulhusna";

import HomePage from "./pages/homePage/HomePage";
import NoMatch from "./pages/noMatch/NoMatch";
import DetailPage from "./pages/detailPage/DetailPage";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(setSurahs());
    this.props.dispatch(setAsmaulhusna());
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/ourquran" component={HomePage} />
            <Route exact path="/alquran">
              <Redirect to="/ourquran" />
            </Route>
            <Route path="/alquran/:surahId" component={DetailPage} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
