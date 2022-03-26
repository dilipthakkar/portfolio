import React from "react";
import styled from "styled-components";
import { Color } from "../../theme/colors";
const MyWorkCard = (props: { image: string; link: string }) => {
  const { image, link } = props;
  return (
    <MyWorkCardWrapper image={image || ""}>
      <ViewButton>
        <a href="#">view project</a>
      </ViewButton>
    </MyWorkCardWrapper>
  );
};

export default MyWorkCard;

const MyWorkCardWrapper = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  min-height: 200px;
  min-width: 200px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    transition: background-color 0.5s ease-in-out;
  }
  &:hover {
    div {
      transform: scale(1);
    }
    &:before {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;
const ViewButton = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  background-color: ${Color.primary};
  transition: transform 0.2s ease-in-out;
  a {
    text-decoration: none;
    color: black;
    font-family: "Open Sans", sans-serif;
  }
`;
