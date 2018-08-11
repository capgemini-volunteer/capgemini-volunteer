import React from 'react';
import {SignupType } from '../Dialog/Dialog-Type/signup-type.js'
import {LoginType } from '../Dialog/Dialog-Type/login-type.js'


export class DialogWrapper extends React.Component {
  render() {
    switch (this.props.dialogType) {
      case 'signup':
        return <SignupType content={this.props.content}  title={this.props.title} 
input={this.props.input}
isOpen={this.props.show} toggle={this.props.onClose} />;
      case 'login':
        return <LoginType content={this.props.content}  title={this.props.title} isOpen={this.props.show} toggle={this.props.onClose} />;

        default:
        return null;
    }
  }
};