
import React, { Fragment } from 'react';


export class DashboardSidenav extends React.Component {


  render() {
    return (
      <Fragment>
 <nav className="dashboard-nav">
        <ul>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./">Profile</a>
          </li>
          <li>
            <a href="./">Notifications</a>
          </li>

        </ul>
        </nav>
      </Fragment>
    );
  }
}
