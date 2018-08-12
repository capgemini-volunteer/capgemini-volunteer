
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Confetti } from '../Confetti/Confetti.js'
import { HomeHeader } from '../Home/home-header.js'
import { DialogConductor } from '../Dialog/dialog-conductor.js'


import '../Home/home.css';
import '../Modal/Modal.css';
import '../Confetti/confetti.css';

export class Landing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      triggerPrompt: '',
      value:''
    };
    this.toggleDialog = this.toggleDialog.bind(this);
    this.bindValue = this.bindValue.bind(this);
  }

  toggleDialog = (promptType) => {
    this.setState({
      isOpen: !this.state.isOpen,
      triggerPrompt: promptType
    });
  }
  bindValue = (inputValue) => {
    this.setState({
      value: inputValue
    });
  }
  render() {
    return (
      <Fragment>
        <Confetti/>
        <HomeHeader 
          dialogTrigger={this.toggleDialog} 
          ctaTrigger ={this.bindValue}/>
        <DialogConductor
          show={this.state.isOpen}
          onClose={this.toggleDialog}
          signupInput={this.state.value}
          currentModal={this.state.triggerPrompt} />
      </Fragment>
    );
  }
}

Landing.propTypes = {
  currentModal: PropTypes.string
};