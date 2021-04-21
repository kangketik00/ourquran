import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
            <Route path="/ourquran/:surahId" component={DetailPage} />
            <Route path="*" component={NoMatch} />
            <Route exact path="/ourquran/404" component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
