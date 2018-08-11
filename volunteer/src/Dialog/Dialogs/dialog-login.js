import React, { Fragment } from 'react';
import { DialogWrapper } from '../../Dialog/dialog-wrapper.js'

export class DialogLogin extends React.Component {
  render() {
    return (
      <Fragment>
        <DialogWrapper show={this.props.show}   onClose={this.props.onClose} dialogType='login'  title='Log In' />
      </Fragment>
    );
  }
}