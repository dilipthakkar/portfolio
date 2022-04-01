import React from "react";
import styled from "styled-components";
import { Color } from "../../theme/colors";
const CodeSnippet = (props: any) => {
  return (
    <div>
      <Editor>
        <span className="toolbar">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className={"editor"}>{props.children}</div>
      </Editor>
    </div>
  );
};

export default CodeSnippet;

const Editor = styled.div`
  width: 100%;
  background-color: black;
  font-family: Consolas;
  border-radius: 10px;
  overflow: hidden;
  .toolbar {
    width: 100%;
    height: 20px;
    display: block;
    background-color: ${"#fffFFF"}30;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    span {
      width: 15px;
      height: 15px;
      display: block;
      border-radius: 100%;
      margin: 0px 4px;
    }
    span:nth-child(1) {
      background-color: ${"#ff0000"};
      &:hover {
        background-color: ${"#ff0000"}40;
      }
    }
    span:nth-child(2) {
      background-color: ${"#ffae00"};
      &:hover {
        background-color: ${"#ffae00"}40;
      }
    }
    span:nth-child(3) {
      background-color: ${"#04a12b"};
      &:hover {
        background-color: ${"#04a12b40"};
      }
    }
  }
  .editor{
      padding : 10px;
  }
`;
