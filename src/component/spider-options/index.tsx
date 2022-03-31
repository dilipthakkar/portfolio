import React, { useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import Svg1 from "./../../assets/images/Slice 1.svg";
import Svg2 from "./../../assets/images/Slice 2.svg";
import styled, { keyframes } from "styled-components";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import { Color } from "../../theme/colors";
const soundFile = require("../../assets/sound/music-1.wav");
const howlObj = new Howl({
  src: soundFile,
  loop: true,
  volume: 0.5,
});
const SpiderOptions = () => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const theme = "dark";
  useEffect(() => {
    if (isPlaying) {
      howlObj.play();
    } else {
      howlObj.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <Wrapper>
        <SecondImage
          src={Svg2}
          alt="spiderman-1"
          onClick={() => setOpen(!open)}
        />
        <OptionContainer open={open}>
          <OptionList>
            <li>
              <DarkModeIcon />
            </li>
            {isPlaying ? (
              <li>
                <MusicOffIcon
                  onClick={() => {
                    setIsPlaying(false);
                  }}
                />
              </li>
            ) : (
              <li>
                <AudiotrackIcon
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                />
              </li>
            )}
          </OptionList>
        </OptionContainer>
        <FirstImage
          src={Svg1}
          alt="spiderman-1"
          onClick={() => setOpen(!open)}
        />
      </Wrapper>
    </div>
  );
};

export default SpiderOptions;

const FirstImage = styled.img`
  width: 100%;
  height: auto;
`;

const SecondImage = styled.img`
  width: 100%;
  height: auto;
`;
const Wrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
`;

const OptionContainer = styled.div<{ open: boolean }>`
  max-height: ${(props) => (props.open ? "300px" : "0px")};
  overflow: hidden;
  display: block;
  transition: max-height 500ms ease-in-out;
  color: white;
  text-align: center;
`;

const OptionList = styled.ul`
  svg:hover {
    color: ${Color.primary};
  }
`;
