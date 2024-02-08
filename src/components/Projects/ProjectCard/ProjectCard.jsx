import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ name, deployed, iconUrl, link, onClick, isActive, bgColor }) => {
  return (
    <div className={`project-card ${isActive ? 'active' : ''}`} onClick={() => onClick()}>
        <div className={`project-icon`} style={{background: `${bgColor}`}}>
            <img className='icon-image' src={iconUrl} alt={name} />
        </div>
        <div className='project-name'>
            <p>{name}</p>
        </div>
        {deployed ? <a className='project-link' href={link} target='_blank'>View Live</a> : <span className='in-development'>In Development</span>}
    </div>
  )
}

export default ProjectCard