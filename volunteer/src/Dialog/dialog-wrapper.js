import React from 'react';
import {EmployeeSignupType } from '../Dialog/Dialog-Type/employee-type.js'
import {CaseWorkerSignupType } from '../Dialog/Dialog-Type/caseworker-type.js'
import {LoginType } from '../Dialog/Dialog-Type/login-type.js'


export class DialogWrapper extends React.Component {
  render() {
    switch (this.props.dialogType) {
      case 'employee-signup':
        return <EmployeeSignupType content={this.props.content}  title={this.props.title} isOpen={this.props.show} toggle={this.props.onClose} />;
      case 'caseworker-signup':
        return <CaseWorkerSignupType content={this.props.content}  title={this.props.title} isOpen={this.props.show} toggle={this.props.onClose} />;
      case 'login':
        return <LoginType content={this.props.content}  title={this.props.title} isOpen={this.props.show} toggle={this.props.onClose} />;

        default:
        return null;
    }
  }
};