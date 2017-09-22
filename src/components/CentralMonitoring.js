import React from 'react';

export default class CentralMonitoring extends React.Component {
  render() {
    return (
      <div>
          <div className='Cent'>
            <div className='CentPara'>
              <h4 className='Head1'><center>Central Monitoring Station (RMS)</center></h4>

              <center><strong>1-800-932-3822</strong></center>

              <p className='Bill1'>
              You will call this # to verifying alarm activity.
              You will also call this number if you accidentally cause an alarm.
              <br></br>
              *Have your Information ready to verify who you are, and what location you are referring too!*
              <ul>
                <li>Primary Alarm Account #</li>
                <li>Name on Alarm Account</li>
                <li>Your Name</li>
                <li>Arming/Disarming Code #</li>
                <li>Alarm Account Address</li>
              </ul>
              *You can also call this # for Emergency Service 24 hours a day!*
              Central Station Personnel will assist you with your problems or
              they will direct you to an All-Star on-call technician to assist you!
              </p>
              <div id='ParaPic1'/>
            </div>
            <div className='CentPara1'>
            <h4><center>All-Star Electronic Security Systems, INC.</center></h4>
              <p className='Bill'>For billing, general questions, code# changes, or service issues!
              <br></br>
              <br></br>
              Call <strong>1-765-742-2222</strong> *For Emergency Service 24 hours a day!*
              <br></br>
              <br></br>
              Call the number above and listen to instructions as to how
              <br></br>
              you contact an on-call technician!
              </p>
              <div id='ParaPic'/>
            </div>
          </div>
      </div>
    )
  }
}
