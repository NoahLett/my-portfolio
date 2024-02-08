import React from 'react';
import './ProjectInfoCard.css';

const ProjectInfoCard = ({ name, stack, description }) => {
  return (
    <div className='project-info-card'>
        <h6>{name}</h6>
        <div className='project-info-content'>
            <p className='project-stack-header'>Tech Specs</p>
            {
                stack.map((item, index) => {
                    return (
                        <div key={`stack_${index}`}>
                            <div className='project-stack-info'>
                                <span className='project-stack-info-title'>{item.title}</span>
                                <span className='project-stack-info-option'>{item.option}</span>
                            </div>
                        </div>
                    )
                })
            }
            <div className='description-section'>
                <p className='description-header'>Project Details</p>
                {
                    description.map((item, index) => {
                        return (
                            <div className='description-item' key={`description_${index}`}>
                                <p className='description-item-title'>{item.title}</p>
                                <div className='description-item-text'>
                                    <span>{item.text}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectInfoCard