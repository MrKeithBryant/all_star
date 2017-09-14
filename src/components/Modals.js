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
        <Button className='modalName' style={{border: '2px solid red', backgroundColor: 'ghostwhite', color: 'red', fontWeight: '600', textShadow: '1px 1px 2px black'}} onClick={this.toggle}>Trucks</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.Recipe}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Return</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
