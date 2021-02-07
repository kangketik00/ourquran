import React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import Skeleton from "@material-ui/lab/Skeleton";
import { Hidden } from "@material-ui/core";
import AudioPlayer from "react-h5-audio-player";

import "./AudioSurahMobile.scss";

const mapStateToProps = (state) => {
  return {
    items: state.surah.items,
    error: state.surah.error,
    loading: state.surah.loading,
  };
};

class AudioSurahMobile extends Component {
  constructor() {
    super();
    this.state = {
      currentSurahIndex: 0,
    };
  }

  handleClickPrevious = (playlist) => {
    this.setState((prevState) => ({
      currentSurahIndex:
        prevState.currentSurahIndex === 0
          ? playlist.length - 1
          : prevState.currentSurahIndex - 1,
    }));
  };

  handleClickNext = (playlist) => {
    this.setState((prevState) => ({
      currentSurahIndex:
        prevState.currentSurahIndex < playlist.length - 1
          ? prevState.currentSurahIndex + 1
          : 0,
    }));
  };

  handleEnded = (playlist) => {
    if (this.state.currentSurahIndex < playlist.length - 1) {
      this.setState((prevState) => ({
        currentSurahIndex:
          prevState.currentSurahIndex < playlist.length - 1
            ? prevState.currentSurahIndex + 1
            : 0,
      }));
    }
  };

  render() {
    const { items, loading, error } = this.props;
    const { currentSurahIndex } = this.state;

    if (error)
      return <h1 style={{ textAlign: "center" }}>oops something went wrong</h1>;
    if (loading) return <Skeleton />;
    const surah = items[0];
    const playlist = surah.ayahs;

    return (
      <Hidden smUp>
        <div id="audio-surah-mobile">
          <AudioPlayer
            header={`${surah.englishName} Ayah : ${playlist[currentSurahIndex].numberInSurah}`}
            showSkipControls={true}
            showJumpControls={false}
            src={`${playlist[currentSurahIndex].audio}`}
            onClickPrevious={() => this.handleClickPrevious(playlist)}
            onClickNext={() => this.handleClickNext(playlist)}
            onEnded={() => this.handleEnded(playlist)}
          />
        </div>
      </Hidden>
    );
  }
}

export default connect(mapStateToProps)(AudioSurahMobile);
