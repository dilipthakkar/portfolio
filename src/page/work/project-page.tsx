import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectDescription from './project-description';

const ProjectPage = () => {
    const {id} = useParams();
  return (
    <div>
      <ProjectDescription id={Number(id)} />
    </div>
  );
}

export default ProjectPage