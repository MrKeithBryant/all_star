import React from 'react';
import Modals from './Modals.js';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        HomePage
        <img className='Inter' style={{height: '100px', width: '150px'}}/> 
          <div className='modalsec1'>
            <Modals />
          </div>

      </div>
    )
  }
}
