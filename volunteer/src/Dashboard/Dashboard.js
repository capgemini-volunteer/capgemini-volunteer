
import React, { Fragment } from 'react';
import { DashboardHeader } from './dashboard-header.js'
import { DashboardSidenav } from './dashboard-sidenav.js'
import { DashboardView } from './dashboard-view.js'

import './dashboard.css';
export class Dashboard extends React.Component {


  render() {
    return (
      <div className="dashboard-bg">
        <DashboardHeader />
        <DashboardSidenav />
        <DashboardView />
      </div>
    );
  }
}
