import React from 'react';
import './Projects.css';
import { PROJECTS } from '../../utils/data';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className='projects-container'>
        <h5>Featured Projects</h5>
        <div className='projects-content'>
            <div className='project-info'>
              
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
                      deployed={item.deployed}
                      link={item.link}
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