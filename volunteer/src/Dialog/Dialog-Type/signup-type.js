import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class SignupType extends React.Component {

  constructor(props) {
    super(props);
    this.promptDialog = this.promptDialog.bind(this); 
}

  promptDialog = (type) => { 
    this.props.toggle(type);
    setTimeout(function() { 
      this.props.toggle(type);
  }.bind(this), 10)
  }


  render() {
    const externalCloseBtn =
      <button className="close external"
        onClick={this.props.toggle}>
        <i className="material-icons md-36 text-light"> close</i>
      </button>;
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} external={externalCloseBtn}>
        <ModalHeader >{this.props.title}</ModalHeader>

        <ModalBody>  
          <div className="form-actions col-12">
              <button className="btn btn-block btn-social btn-facebook">
              Sign Up with Gmail
              </button>
              <br/>
          </div> 
        </ModalBody>

      </Modal>

    );
  }
}