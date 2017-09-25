import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button className='modalName' style={{border: '2px solid red', backgroundColor: 'ghostwhite', color: 'red', fontWeight: '600', textShadow: '1px 1px 2px black'}} onClick={this.toggle}>Home Security</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            In this area, detailed information about specific products can be displayed. Links may be placed to connect to
            other sites in this area as well.
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Return</Button>{' '}
          </ModalFooter>
        </Modal>
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
      </div>
    );
  }
}
