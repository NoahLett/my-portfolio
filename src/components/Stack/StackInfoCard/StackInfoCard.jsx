import React from 'react';
import './StackInfoCard.css';

const StackInfoCard = ({ heading, stack }) => {
  return (
    <div className='stack-info-card'>
        <h6>{heading}</h6>
        <div className='stack-info-content'>
            {
                stack.map((item, index) => {
                    return (
                        <React.Fragment key={`stack_${index}`}>
                            <div className='stack-info'>
                                <p>{item.skill}</p>
                                <p className='percentage'>{item.percentage}</p>
                            </div>

                            <div className='stack-progress-bg'>
                                <div className='stack-progress' style={{width: item.percentage}} />
                            </div>

                        </React.Fragment>
                    )
                })
            }
        </div>
    </div>
  )
}

export default StackInfoCard