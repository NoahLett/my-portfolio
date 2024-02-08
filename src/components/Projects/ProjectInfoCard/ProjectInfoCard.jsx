import React from 'react';
import './ProjectInfoCard.css';

const ProjectInfoCard = ({ name, stack, description }) => {
  return (
    <div className='project-info-card'>
        <h6>{name}</h6>
        <div className='project-info-content'>
            {
                stack.map((item, index) => {
                    return (
                        <div key={`stack_${index}`}>
                            <div className='stack-info'>
                                <span>{item.title}</span>
                                <span>{item.option}</span>
                            </div>
                        </div>
                    )
                })
            }
            <div className='description-section'>
                <p>Project Details</p>
                {
                    description.map((item, index) => {
                        return (
                            <div key={`description_${index}`}>
                                <div className='description-info'>
                                    <span>{item.title}</span>
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