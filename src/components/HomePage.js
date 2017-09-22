import React from 'react';
import Modals from './Modals.js';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className='HomeP'>
        <div className='Seg1'>
          <div className='SegPara'>
            <p>
              From Home Security Systems to Video Surveillance,
              <br/>
              All-Star has a solution for your security needs.
            </p>
              <div className='ModalSec1'>
                <Modals />
                <img className='Inter' style={{height: '100px', width: '150px'}}/>
              </div>
            </div>
            <div className='SegPara1'>
              <p>
                From Home Security Systems to Video Surveillance,
                <br/>
                All-Star has a solution for your security needs.
              </p>
                <div className='ModalSec1'>
                  <Modals />
                  <img className='Inter' style={{height: '100px', width: '150px'}}/>
                </div>
            </div>
            <div className='SegPara2'>
              <p>
                From Home Security Systems to Video Surveillance,
                <br/>
                All-Star has a solution for your security needs.
              </p>
                <div className='ModalSec1'>
                  <Modals />
                  <img className='Inter' style={{height: '100px', width: '150px'}}/>
                </div>
            </div>
            <div className='SegPara3'>
              <p>
                From Home Security Systems to Video Surveillance,
                <br/>
                All-Star has a solution for your security needs.
              </p>
                <div className='ModalSec1'>
                  <Modals />
                  <img className='Inter' style={{height: '100px', width: '150px'}}/>
                </div>
            </div>
            <div className='SegPara4'>
              <p>
                From Home Security Systems to Video Surveillance,
                <br/>
                All-Star has a solution for your security needs.
              </p>
                <div className='ModalSec1'>
                  <Modals />
                  <img className='Inter' style={{height: '100px', width: '150px'}}/>
                </div>
            </div>
            <div className='SegPara5'>
              <p>
                From Home Security Systems to Video Surveillance,
                <br/>
                All-Star has a solution for your security needs.
              </p>
                <div className='ModalSec1'>
                  <Modals />
                  <img className='Inter' style={{height: '100px', width: '150px'}}/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
