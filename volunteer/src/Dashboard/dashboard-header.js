
import React, { Fragment } from 'react';
import logosmall from '../mobile-logo.svg';

export class DashboardHeader extends React.Component {


  render() {
    return (
      <Fragment>
      <header className="dashboard-header">
        <div ><img className="mobile-logo" src={logosmall} alt="logo" /></div><a href="./" className="log-form">Logout</a>
        </header>
      </Fragment>
    );
  }
}
