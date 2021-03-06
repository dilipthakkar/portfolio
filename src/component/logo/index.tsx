import React from "react";
import styled from "styled-components";
import { Color } from "../../theme/colors";
const NameLogo = () => {
  return (
    <ImageWrapper>
      <svg
        width="100%"
        height="125%"
        viewBox="0 0 159 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M49 77H62.5L60 80L56 85L54 91.5L53 97.5V105.5H49.5L45 106.5L41 108.5L37.5 111L34.5 114.5L33 117L31.5 121.5V156.5L33 161.5L36 166.5L39.5 170L44 172L47 173.5H63L58 179L55.5 183.5L54 189.5L53 196V202.5L47 202L41.5 201.5L34.5 200L29 197.5L23 194L18 190.5L13 185.5L9.5 181.5L6.5 176L4 171L2.5 165L1 160.5V156.5V122.5L1.5 115.5L4 108.5L7 102L11 95.5L17 89.5L23.5 84.5L30.5 80.5L39 77.5L49 77Z"
          fill={"#FFF"}
          className="x"
        />
        <path
          d="M83.5 173.5H90.5V105.5H61V96L62.5 90.5L66 85L69.5 81.5L74 78.5L80.5 77L90.5 76.5L91 47.5H101.5H108L113 50L118 53L121.5 58L124 63L125.5 68V77H158V88L155 94L153 97.5L149.5 100.5L145.5 103L140.5 105L125.5 105.5V181.5L123.5 186.5L121.5 190.5L118.5 194L114 197.5L110 200L103.5 202H61V194L62 189.5L64.5 183.5L67.5 180L72.5 176.5L77.5 174L83.5 173.5Z"
          fill={Color.primary}
          className="y"
        />
        <path
          d="M125.5 1V49L118 43L113 40.5L107.5 39.5L90.5 39V23L92.5 16.5L96 11L100.5 6.5L106 3L111 1H125.5Z"
          fill={"#FFF"}
          className="x"
        />
        <path
          d="M49 77H62.5L60 80L56 85L54 91.5L53 97.5V105.5H49.5L45 106.5L41 108.5L37.5 111L34.5 114.5L33 117L31.5 121.5V156.5L33 161.5L36 166.5L39.5 170L44 172L47 173.5H63L58 179L55.5 183.5L54 189.5L53 196V202.5L47 202L41.5 201.5L34.5 200L29 197.5L23 194L18 190.5L13 185.5L9.5 181.5L6.5 176L4 171L2.5 165L1 160.5V156.5V122.5L1.5 115.5L4 108.5L7 102L11 95.5L17 89.5L23.5 84.5L30.5 80.5L39 77.5L49 77Z"
          stroke="black"
        />
        <path
          d="M83.5 173.5H90.5V105.5H61V96L62.5 90.5L66 85L69.5 81.5L74 78.5L80.5 77L90.5 76.5L91 47.5H101.5H108L113 50L118 53L121.5 58L124 63L125.5 68V77H158V88L155 94L153 97.5L149.5 100.5L145.5 103L140.5 105L125.5 105.5V181.5L123.5 186.5L121.5 190.5L118.5 194L114 197.5L110 200L103.5 202H61V194L62 189.5L64.5 183.5L67.5 180L72.5 176.5L77.5 174L83.5 173.5Z"
          stroke="black"
        />
        <path
          d="M125.5 1V49L118 43L113 40.5L107.5 39.5L90.5 39V23L92.5 16.5L96 11L100.5 6.5L106 3L111 1H125.5Z"
          stroke="black"
        />
      </svg>
    </ImageWrapper>
  );
};

export default NameLogo;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  svg {
    position: relative;
    &:hover {
      .x {
        fill: ${Color.primary};
      }
      .y {
        fill: white;
      }
    }
  }
`;
