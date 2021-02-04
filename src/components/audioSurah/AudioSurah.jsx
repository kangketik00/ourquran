import React, { Component } from "react";
import { connect } from "react-redux";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioSurah.scss";
import Skeleton from "@material-ui/lab/Skeleton";

const mapStateToProps = (state) => {
  return {
    items: state.surah.items,
    error: state.surah.error,
    loading: state.surah.loading,
  };
};

class AudioSurah extends Component {
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
    if (error) return <h1>oops something went wrong</h1>;
    if (loading) return <Skeleton />;
    const surah = items[0];
    const playlist = surah.ayahs;

    return (
      <div id="audio-player">
        <AudioPlayer
          header={`${surah.englishName} Ayah : ${playlist[currentSurahIndex].numberInSurah}`}
          autoPlayAfterSrcChange={true}
          showSkipControls={true}
          showJumpControls={false}
          src={`${playlist[currentSurahIndex].audio}`}
          onClickPrevious={() => this.handleClickPrevious(playlist)}
          onClickNext={() => this.handleClickNext(playlist)}
          onEnded={() => this.handleEnded(playlist)}
          layout={"horizontal-reverse"}
          customProgressBarSection={[
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION,
            RHAP_UI.VOLUME,
          ]}
          customControlsSection={[
            RHAP_UI.MAIN_CONTROLS,
            RHAP_UI.ADDITIONAL_CONTROLS,
          ]}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AudioSurah);
