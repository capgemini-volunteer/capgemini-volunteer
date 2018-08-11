import React, { Fragment } from 'react';
import { DialogWrapper } from '../../Dialog/dialog-wrapper.js'

export class DialogSignup extends React.Component {
  render() {
    return (
      <Fragment>
        <DialogWrapper show={this.props.show}   onClose={this.props.onClose} dialogType='signup' input={this.props.cta} title='Sign Up' />
      </Fragment>
    );
  }
}