import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class LoginType extends React.Component {

  constructor(props) {
    super(props);
    this.promptDialog = this.promptDialog.bind(this);
  }

  promptDialog = (type) => {
    this.props.toggle(type);
    setTimeout(function () {
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
          <form name="login" noValidate="">
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Email:</label>
              <input name="email" id="email" className="form-control input" required="" />
              <span className="hidden help-block">Email or phone number is required</span>
            </div>
            <div className="form-group">

              <label htmlFor="recipient-name" className="col-form-label">Password:</label>
              <input type="password" name="password" id="password" className="form-control input" required="" />
              <span className=" hidden help-block">Password is required</span>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>

          <div className="form-actions col-12">
            <Button className=" col-12 " color="success" onClick={this.props.toggle}>Log In</Button>
            <hr />
            <button className="btn btn-block btn-social btn-google">
              Log In with Gmail
            </button>
            <br />
          </div>


        </ModalFooter>
      </Modal>

    );
  }
}