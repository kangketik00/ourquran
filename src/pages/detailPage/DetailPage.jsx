import React, { Component } from "react";
import Header from "../../components/header/Header";
import PlayListBar from "../../components/playlistBar/PlayListBar";
import SurahRead from "../../components/surahRead/SurahRead";
import { connect } from "react-redux";
import { setSurah } from "../../actions/surah";
class DetailPage extends Component {
  componentDidMount() {
    const { surahId } = this.props.match.params;
    this.props.dispatch(setSurah(surahId));
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header urlPage="alquran" />
        <SurahRead />
        <PlayListBar />
      </>
    );
  }
}

export default connect()(DetailPage);
