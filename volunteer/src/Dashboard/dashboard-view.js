
import React, { Fragment } from 'react';


export class DashboardView extends React.Component {


  render() {
    return (
      <Fragment>
<div className="dashboard-container">
        <main>
          <h2 className="view-header">Home</h2>
          <div className="row">
            <div className="col-1-2">
              <div className="box-light">
              Left
              </div>
            </div>
            <div className="col-1-2">
              <div className="box-light">
              Right
              </div>
            </div>
          </div>
          <div class="row">
            <div className="col-1-1">
              <div className="box-light">
              Full
              </div>
            </div>
          </div>
        </main>
        </div>
      </Fragment>
    );
  }
}
