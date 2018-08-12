
import React, { Fragment } from 'react';
import { Badge } from 'reactstrap';
import logosmall from '../mobile-logo.svg';

export class DashboardSidenav extends React.Component {


  render() {
    return (
      <Fragment>
        <nav className="dashboard-nav">
          <ul>
            <li>
            <div className="logo-space"><img className="mobile-logo" src={logosmall} alt="logo" /></div>
            </li>
            <li>
              <a href="./"><i className="material-icons md-36 text-dark"> home</i></a>
            </li>
            <li>
              <a href="./"><i className="material-icons md-36 text-dark"> account_box</i></a>
            </li>
            <li>
              <a href="./"><i className="material-icons md-36 text-dark">  notification_important</i> <Badge className="pos-ab"  href="#" color="danger">2</Badge></a>
            </li>

          </ul>
        </nav>
      </Fragment>
    );
  }
}
