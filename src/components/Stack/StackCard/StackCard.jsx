import React from 'react';
import './StackCard.css';

const StackCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div className={`stack-card ${isActive ? 'active' : ''}`} onClick={()=> onClick()}>
        <div className='stack-icon'>
            <img className='icon-image' src={iconUrl} alt={title} />
        </div>
        <span>{title}</span>
    </div>
  )
}

export default StackCard