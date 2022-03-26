import React, { ReactNode } from "react";
import { Button as Btn } from "@mui/material";
import styled from "styled-components";
import { Color } from "../../../theme/colors";
const Button = (props: { children: ReactNode ,  }) => {
  return <CustomBtn>{props.children}</CustomBtn>;
};

export default Button;

const CustomBtn = styled(Btn)`
  display: inline-block;
  background-color: transparent;
  border: ${Color.primary} 1px solid;
  width: 200px;
  height: 50px;
  border-radius: 0px;
  color: ${Color.primary};
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &:after {
    position: absolute;
    content: "";
    height: 100%;
    display: block;
    background-color: ${Color.primary};
    width: 0%;
    z-index: -1;
    top: 0;
    left: 0;
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
    transition: width 300ms ease-in-out;
  }
  &:hover {
    color: black;
    &:after {
      width: 150%;
    }
  }
`;
