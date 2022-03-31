import { Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "../component/side-bar";
import HomePage from "../page/home";
import styled from "styled-components";
import { breakpoint } from "../constant/breakpoints";
import MenuIcon from "@mui/icons-material/Menu";
import SpiderOptions from "../component/spider-options";
import AboutPage from "../page/about";
import { scrollAnimationFile } from "../script/scroll-animation";
import { blastFile } from "../script/blast-animation";
import { scrollBarWidthFile } from "../script/scroll-bar-width";
import { lionLogoFile } from "../script/lion-logo-animation";

const Router = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    scrollAnimationFile();
    blastFile();
    scrollBarWidthFile();
    lionLogoFile();
  }, [navigate]);
  return (
    <Grid container wrap="nowrap" className="main">
      <Grid item>
        <Sidebar open={sideBarOpen} onClose={() => setSideBarOpen(false)} />
      </Grid>
      <MenuIconDiv onClick={() => setSideBarOpen(true)}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </MenuIconDiv>
      <RightSection item sx={{ flex: 1 }}>
        <SpiderOptionWrapper>
          <SpiderOptions />
        </SpiderOptionWrapper>

        {/* routes */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </RightSection>
    </Grid>
  );
};

export default Router;

const RightSection = styled(Grid)`
  margin-left: 140px;
  @media screen and (max-width: ${breakpoint.md}px) {
    margin-left: 0px;
  }
`;

const MenuIconDiv = styled.div`
  float: right;
  background-color: rgb(128, 128, 128, 0.7);
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 2px;
  display: none;
  @media screen and (max-width: ${breakpoint.md}px) {
    display: block;
  }
`;

const SpiderOptionWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -140px;
  transition: top 700ms ease-in-out;
  &:hover {
    top: 0px;
  }
  @media screen and (max-width: ${breakpoint.md}px) {
    display: none;
  }
`;
