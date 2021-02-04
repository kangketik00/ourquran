import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import AudioSurahDesktop from "../audioSurahDesktop/AudioSurahDesktop";
import AudioSurahMobile from "../audioSurahMobile/AudioSurahMobile";
import "./PlayLIstBar.scss";

// Method for hide on scroll
const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
};

const PlayListBar = ({ handleToggle, ...props }) => {
  return (
    <>
      <HideOnScroll {...props}>
        <div id="playListBar">
          <Toolbar disableGutters={true}>
            {/* Audio Surah Desktop Size */}
            <AudioSurahDesktop />

            {/* Audio Surah Mobile Size */}
            <AudioSurahMobile />
          </Toolbar>
        </div>
      </HideOnScroll>
    </>
  );
};

export default PlayListBar;
