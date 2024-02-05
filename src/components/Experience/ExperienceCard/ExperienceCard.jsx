import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
  return (
    <div className='work-experience-card'>
        <h6>{details.title}</h6>

        <div className='work-details'>
          <div className="work-company">{details.company}</div>
          <div className="work-location">{details.location}</div>
        </div>
          <div className='work-duration'>{details.date}</div>

        <ul>
          {
            details.responsibilities.map((item) => {
              return (
              <li className='work-list-item' key={item}>{item}</li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default ExperienceCard