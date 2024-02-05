import React from 'react';
import './Stack.css';
import StackCard from './StackCard/StackCard';
import { STACK } from '../../utils/stackData';

const Stack = () => {

  console.log(STACK);

  return (
    <section className='stack-container'>
        <h5>Technical Proficiency &amp; Stack</h5>
        <div className='stack-content'>
            <div className='stack'>
              {
                STACK.map((item) => {
                  return (
                    <StackCard 
                      key={item.title}
                      title={item.title}
                      iconUrl={item.icon} 
                    />
                  )
                })
              }
            </div>
            <div className='stack-info'></div>
        </div>
    </section>
  )
}

export default Stack