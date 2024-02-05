import React, { useState } from 'react';
import './Stack.css';
import StackCard from './StackCard/StackCard';
import { STACK } from '../../utils/data';
import StackInfoCard from './StackInfoCard/StackInfoCard';

const Stack = () => {

  const [selectedStack, setSelectedStack] = useState(STACK[0]);

  const handleSelectStack = (data) => {
    setSelectedStack(data);
  };

  return (
    <section className='stack-container'>
        <h5>Technical Skills &amp; Stack</h5>
        <div className='stack-content'>
            <div className='stack'>
              {
                STACK.map((item) => {
                  return (
                    <StackCard 
                      key={item.title}
                      title={item.title}
                      iconUrl={item.icon}
                      isActive={selectedStack.title === item.title}
                      onClick={() => {
                        handleSelectStack(item);
                      }} 
                    />
                  )
                })
              }
            </div>
            <div className='stack-info'>
              <StackInfoCard 
                heading={selectedStack.title}
                stack={selectedStack.skills}
              />
            </div>
        </div>
    </section>
  )
}

export default Stack