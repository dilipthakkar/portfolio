import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled, { keyframes } from "styled-components";
import { Color } from "../../theme/colors";
import { breakpoint } from "../../constant/breakpoints";
import CloseIcon from "@mui/icons-material/Close";
import LionLogo from "../lion-logo";
import { useNavigate } from "react-router-dom";
import NameLogo from "../logo";
const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  return (
    <NavbarBox open={open}>
      <CloseIconDiv onClick={onClose}>
        <CloseIcon />
      </CloseIconDiv>
      <Grid
        container
        direction={"column"}
        justifyContent={"space-between"}
        sx={{ height: "100%" }}
      >
        <Grid item>
          <Box sx={{ width: "100%", height: 200 }}>
            <LionLogoWrapper
              onClick={() => {
                navigate("/");
                onClose();
              }}
            >
              <NameLogo />
            </LionLogoWrapper>
          </Box>
        </Grid>
        <Grid item>
          <Linklist>
            <li onClick={() => onClose()}>
              <NavLink to={"/about"}>About</NavLink>
            </li>

            <li onClick={() => onClose()}>
              <NavLink to={"/skills"}>My Skills</NavLink>
            </li>

            <li onClick={() => onClose()}>
              <NavLink to={"/work"}>Work</NavLink>
            </li>

            <li onClick={() => onClose()}>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>

            <li onClick={() => onClose()}>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
          </Linklist>
        </Grid>
        <Grid item>
          <SocailMediaGrid container justifyContent={"center"} spacing={0.5}>
            <Grid item>
              <InstagramIcon
                onClick={() => {
                  navigate(
                    "//www.instagram.com/mr.thakkar___/?utm_medium=copy_link"
                  );
                }}
              />
            </Grid>
            <Grid item>
              <LinkedInIcon
                onClick={() => {
                  navigate(
                    "//www.linkedin.com/in/dilip-thakkar-465898194"
                  );
                }}
              />
            </Grid>
            <Grid item>
              <GitHubIcon
                onClick={() => {
                  navigate("//www.github.com/dilipthakkar");
                }}
              />
            </Grid>
          </SocailMediaGrid>
        </Grid>
      </Grid>
    </NavbarBox>
  );
};

export default Sidebar;

const FadeInAnimation = keyframes`
0%{
  opacity : 0;
}
100%{
  opacity : 1;
}
`;

const NavbarBox = styled(Box)<{ open: boolean }>`
  width: 140px;
  height: 100vh;
  z-index: 33;
  background-color: ${Color.dark1};
  position: fixed;
  left: 0;
  right: auto;
  top: 0;
  bottom: 0;
  @media screen and (max-width: ${breakpoint.md}px) {
    display: ${(props) => (props.open ? "block" : "none")};
    width: 100%;
    animation: ${FadeInAnimation} 300ms ease-in-out;
    overflow: hidden;
  } ;
`;

const Linklist = styled.ul`
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
  li {
    font-size: 1.1rem;
    padding: 20px 0px;
    border-top: 1px solid ${Color.grey + "70"};
    border-bottom: 1px solid ${Color.grey + "70"};
  }
`;
const NavLink = styled(Link)`
  color: ${Color.grey};
  text-decoration: none;
  display: block;
  width: 100%;
  &:hover {
    color: ${Color.primary};
  }
`;
const SocailMediaGrid = styled(Grid)`
  gap: 10px;
  color: ${Color.grey};
  height: 15vh;
  svg:hover {
    color: ${Color.primary};
  }
`;

const CloseIconDiv = styled.div`
  float: right;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  padding: 10px;
  right: 20px;
  top: 20px;
  display: none;
  @media screen and (max-width: ${breakpoint.md}px) {
    display: block;
  }
  &:hover {
    background-color: rgba(255, 255, 255);
  }
`;

const LionLogoWrapper = styled(Box)`
  width: 65%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 150px;
`;
