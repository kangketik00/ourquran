import React from "react";
import { Hidden } from "@material-ui/core";
import AudioPlayer from "react-h5-audio-player";
import "./AudioSurahMobile.scss";
const AudioSurahMobile = (props) => {
  const { surah, playlist, currentSurahIndex } = props;
  return (
    <div id="audio-surah-mobile">
      <Hidden smUp implementation="css">
        <AudioPlayer
          header={`${surah.englishName} Ayah : ${playlist[currentSurahIndex].numberInSurah}`}
          autoPlayAfterSrcChange={true}
          showSkipControls={true}
          showJumpControls={false}
          src={`${playlist[currentSurahIndex].audio}`}
          onClickPrevious={() => props.handleClickPrevious(playlist)}
          onClickNext={() => props.handleClickNext(playlist)}
          onEnded={() => props.handleEnded(playlist)}
        />
      </Hidden>
    </div>
  );
};

export default AudioSurahMobile;
