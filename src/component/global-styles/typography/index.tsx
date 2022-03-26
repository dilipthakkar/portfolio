import styled, { StyledComponent } from "styled-components";
import { Typography as TypoText } from "@mui/material";
import React from "react";
import { breakpoint } from "../../../constant/breakpoints";

type TextProps = {
  color: string;
  variant: string;
  component: string;
  fontWeight: number;
  right: boolean;
  center: boolean;
  left: boolean;
};

export const Typography = styled(TypoText)<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight || "normal"};
  text-align: ${(props) =>
    (props.right && "right") ||
    (props.center && "center") ||
    (props.left && "left") ||
    "left"};
  ${(props) =>
    props.variant === "h1" &&
    `
    font-size :6rem ; 
    `};
  ${(props) =>
    props.variant === "h2" &&
    `
    font-size : 4rem ; 
    `};
  ${(props) =>
    props.variant === "h3" &&
    `
    font-size : 3.5rem ; 
    `};
  ${(props) =>
    props.variant === "h4" &&
    `
    font-size : 3rem ; 
    `};
  ${(props) =>
    props.variant === "h5" &&
    `
    font-size : 2rem ; 
    `};
  ${(props) =>
    props.variant === "h6" &&
    `
    font-size : 1.2rem ; 
    `};
  ${(props) =>
    props.variant === "body1" &&
    `
    font-size : 1.2rem ;
    font-family : "Open Sans",sans-serif; 
    `};
  @media screen and (max-width: ${breakpoint.xl}px) {
    ${(props) =>
      props.variant === "h1" &&
      `
    font-size : 5rem ; 
    `};
    ${(props) =>
      props.variant === "h2" &&
      `
    font-size : 4rem ; 
    `};
    ${(props) =>
      props.variant === "h3" &&
      `
    font-size : 2.4rem ; 
    `};
    ${(props) =>
      props.variant === "h4" &&
      `
    font-size : 1.5rem ; 
    `};
    ${(props) =>
      props.variant === "h5" &&
      `
    font-size : 2.1rem ; 
    `};
    ${(props) =>
      props.variant === "h6" &&
      `
    font-size : 1.2rem ; 
    `};
    ${(props) =>
      props.variant === "body1" &&
      `
    font-size : 1.2rem ;
    font-family : "Open Sans",sans-serif; 
    `};
  }
  @media screen and (max-width: ${breakpoint.lg}px) {
    ${(props) =>
      props.variant === "h1" &&
      `
    font-size : 4.5rem ; 
    `};
    ${(props) =>
      props.variant === "h2" &&
      `
    font-size : 3.6rem ; 
    `};
    ${(props) =>
      props.variant === "h3" &&
      `
    font-size : 2.4rem ; 
    `};
    ${(props) =>
      props.variant === "h4" &&
      `
    font-size : 1.5rem ; 
    `};
    ${(props) =>
      props.variant === "h5" &&
      `
    font-size : 2.1rem ; 
    `};
    ${(props) =>
      props.variant === "h6" &&
      `
    font-size : 1.2rem ; 
    `};
    ${(props) =>
      props.variant === "body1" &&
      `
    font-size : 1.2rem ;
    font-family : "Open Sans",sans-serif; 
    `};
  }
  @media screen and (max-width: ${breakpoint.md}px) {
    ${(props) =>
      props.variant === "h1" &&
      `
    font-size : 3rem ; 
    `};
    ${(props) =>
      props.variant === "h2" &&
      `
    font-size : 2.7rem ; 
    `};
    ${(props) =>
      props.variant === "h3" &&
      `
    font-size : 2.4rem ; 
    `};
    ${(props) =>
      props.variant === "h4" &&
      `
    font-size : 1.5rem ; 
    `};
    ${(props) =>
      props.variant === "h5" &&
      `
    font-size : 2.1rem ; 
    `};
    ${(props) =>
      props.variant === "h6" &&
      `
    font-size : 1.2rem ; 
    `};
    ${(props) =>
      props.variant === "body1" &&
      `
    font-size : 1.2rem ;
    font-family : "Open Sans",sans-serif; 
    `};
  }
  @media screen and (max-width: ${breakpoint.sm}px) {
    ${(props) =>
      props.variant === "h1" &&
      `
    font-size : 2.5rem ; 
    `};
    ${(props) =>
      props.variant === "h2" &&
      `
    font-size : 2.4rem ; 
    `};
    ${(props) =>
      props.variant === "h3" &&
      `
    font-size : 2.4rem ; 
    `};
    ${(props) =>
      props.variant === "h4" &&
      `
    font-size : 1.5rem ; 
    `};
    ${(props) =>
      props.variant === "h5" &&
      `
    font-size : 2.1rem ; 
    `};
    ${(props) =>
      props.variant === "h6" &&
      `
    font-size : 1rem ; 
    `};
    ${(props) =>
      props.variant === "body1" &&
      `
    font-size : 0.9rem ;
    font-family : "Open Sans",sans-serif; 
    `};
  }
  @media screen and (max-width: ${breakpoint.xs}px) {
    ${(props) =>
      props.variant === "h1" &&
      `
    font-size : 2.5rem ; 
    `};
    ${(props) =>
      props.variant === "h2" &&
      `
    font-size : 2.4rem ; 
    `};
    ${(props) =>
      props.variant === "h3" &&
      `
    font-size : 2.4rem ; 
    `};
    ${(props) =>
      props.variant === "h4" &&
      `
    font-size : 1.5rem ; 
    `};
    ${(props) =>
      props.variant === "h5" &&
      `
    font-size : 2.1rem ; 
    `};
    ${(props) =>
      props.variant === "h6" &&
      `
    font-size : 0.9rem ; 
    `};
    ${(props) =>
      props.variant === "body1" &&
      `
    font-size : 0.9rem ;
    font-family : "Open Sans",sans-serif; 
    `};
  }
` as typeof TypoText;