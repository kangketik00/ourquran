import { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setSurahs } from "./actions/surahs";
import { setAsmaulhusna } from "./actions/asmaulhusna";

import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/alquran">
              <Redirect to="/" />
            </Route>
            <Route path="/alquran/:surahId" component={DetailPage} />
            <Route path="*" component={NoMatch} />
          </Switch>
          <Footer />
        </BrowserRouter>
        <ScrollToTop />
      </div>
    );
  }
}

export default connect()(App);
