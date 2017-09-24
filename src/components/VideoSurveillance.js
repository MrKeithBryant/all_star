import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default class VideoSurveillance extends React.Component {
  render () {
    return (
      <div>
        VideoSurveillance
        <InputGroup id='inputgroup' size='sm' style={{width: '300px'}}>
        <InputGroupAddon>Username</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
        <InputGroup id='inputgroup1' size='sm' style={{width: '300px'}}>
          <InputGroupAddon>Password</InputGroupAddon>
          <Input type='password' placeholder='password'/>
        </InputGroup>
      </div>
    )
  }
}
