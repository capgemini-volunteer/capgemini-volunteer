import React from 'react';
import { DialogSignup } from '../Dialog/Dialogs/dialog-signup.js'
import { DialogLogin } from '../Dialog/Dialogs/dialog-login.js'


export class DialogConductor extends React.Component {
  render() {
    switch (this.props.currentModal) {
      case 'EmployeeSignUpDialog':
        return <DialogSignup show={this.props.show} cta={this.props.signupInput} dialogType="employee-signup" onClose={this.props.onClose} />;
      case 'CaseWorkerSignUpDialog':
        return <DialogSignup show={this.props.show} cta={this.props.signupInput} dialogType="caseworker-signup" onClose={this.props.onClose} />;
      case 'LoginDialog':
        return <DialogLogin show={this.props.show} onClose={this.props.onClose} />;
      default:
        return null;
    }
  }
};
