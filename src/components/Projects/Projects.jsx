import React, { useState } from 'react';
import './Projects.css';
import { PROJECTS } from '../../utils/data';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectInfoCard from './ProjectInfoCard/ProjectInfoCard';

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);

  const handleSelectedProject = (data) => {
    setSelectedProject(data);
  };

  return (
    <section id='projects' className='projects-container'>
        <h5>Featured Projects</h5>
        <div className='projects-content'>
            <div className='project-info'>
              <ProjectInfoCard 
                name={selectedProject.name}
                stack={selectedProject.stack}
                description={selectedProject.description}
              />
            </div>
            <div className='projects'>
              {
                PROJECTS.map((item) => {
                  return (
                    <ProjectCard 
                      key={item.name}
                      name={item.name}
                      iconUrl={item.icon}
                      bgColor={item.bgColor}
                      isActive={selectedProject.name === item.name}
                      deployed={item.deployed}
                      link={item.link}
                      onClick={() => {
                        handleSelectedProject(item);
                      }}
                    />
                  )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Projects