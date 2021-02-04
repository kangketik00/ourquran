import React from "react";
import { Hidden } from "@material-ui/core";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

import "./AudioSurahAudioSurahDesktop.scss";
const AudioSurahDesktop = (props) => {
  const { surah, playlist, currentSurahIndex } = props;
  return (
    <div id="audio-surah-desktop">
      <Hidden xsDown implementation="css">
        <AudioPlayer
          header={`${surah.englishName} Ayah : ${playlist[currentSurahIndex].numberInSurah}`}
          autoPlayAfterSrcChange={true}
          showSkipControls={true}
          showJumpControls={false}
          src={`${playlist[currentSurahIndex].audio}`}
          onClickPrevious={() => props.handleClickPrevious(playlist)}
          onClickNext={() => props.handleClickNext(playlist)}
          onEnded={() => props.handleEnded(playlist)}
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
      </Hidden>
    </div>
  );
};

export default AudioSurahDesktop;
