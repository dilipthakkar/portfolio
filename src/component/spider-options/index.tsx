import React, { useEffect, useState } from "react";
import Svg1 from "./../../assets/images/Slice 1.svg";
import Svg2 from "./../../assets/images/Slice 2.svg";
import styled, { keyframes } from "styled-components";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import { Color } from "../../theme/colors";

const SpiderOptions = () => {
  const [open, setOpen] = useState(false);
  const musicOn = true;
  const theme = "dark";

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
            <li>
              <AudiotrackIcon />
              <li>
                <MusicOffIcon />
              </li>
            </li>
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
