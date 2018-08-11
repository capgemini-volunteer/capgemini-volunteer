import React from 'react';
import { DialogSignup } from '../Dialog/Dialogs/dialog-signup.js'
import { DialogLogin } from '../Dialog/Dialogs/dialog-login.js'


export class DialogConductor extends React.Component {
  render() {
    switch (this.props.currentModal) {
      case 'SignUpDialog':
        return <DialogSignup show={this.props.show} cta={this.props.signupInput} onClose={this.props.onClose} />;
      case 'LoginDialog':
        return <DialogLogin show={this.props.show} onClose={this.props.onClose} />;
      default:
        return null;
    }
  }
};
