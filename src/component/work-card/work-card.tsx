import { Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../theme/colors";
interface WorkCardProps {
  id: number;
  title: string;
  description: string;
  images: Array<string>;
  imageLogo: string;
  link: string;
  video: string;
  isFull?: boolean;
}

const WorkCard = (props: WorkCardProps) => {
  const { id, title, description, images, imageLogo, link, video, isFull } =
    props;
  const navigate = useNavigate();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <WorkCardContainer sx={{ p: 0 }}>
            <Grid item>
              <ImageFull src={imageLogo} alt="proeject logo" />
            </Grid>
            <div style={{ padding: "10px" }}>
              <Grid item xs={9}>
                <Typography variant="h6">{title}</Typography>
              </Grid>
              <Grid item xs={6}>
                <ViewButton onClick={() => navigate(`/work/${id}`)}>
                  see project
                </ViewButton>
              </Grid>
            </div>
          </WorkCardContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default WorkCard;

const ViewButton = styled.button`
  background-color: transparent;
  border: 0;
  color: blue;
  text-decoration: underline;
  font-size : 15px;
  &:hover {
    color : white;
  }
`;

const ImageLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const WorkCardContainer = styled(Grid)`
  width: 250px;
  color: white;
  background-color: ${Color.dark2};
  -webkit-box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%),
    0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
`;

const ImageFull = styled.img`
  width: 100%;
  height: 150px;
`;
