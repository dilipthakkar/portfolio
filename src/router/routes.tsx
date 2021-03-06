import { Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate , HashRouter } from "react-router-dom";
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
import {WorkCardFile} from "../script/work-card"
import MySkillPage from "../page/skills";
import ContactPage from "../page/contact";
import BlogPage from "../page/blog";
import WorkPage from "../page/work";
import ProjectPage from "../page/work/project-page";

const Router = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    scrollAnimationFile();
    blastFile();
    scrollBarWidthFile();
    lionLogoFile();
    WorkCardFile();
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
          <Route path="/skills" element={<MySkillPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/work" element={<WorkPage />}></Route>
          <Route path="/work/:id" element={<ProjectPage/>}></Route>
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
  background-color: rgb(128, 128, 128, 0.9);
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 2px;
  z-index: 444;

  display: none;
  @media screen and (max-width: ${breakpoint.md}px) {
    display: block;
  }
`;

const SpiderOptionWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -200px;
  z-index: 11111;
  transition: top 700ms ease-in-out;
  &:hover {
    top: 0px;
  }
  @media screen and (max-width: ${breakpoint.md}px) {
    display: none;
  }
`;
