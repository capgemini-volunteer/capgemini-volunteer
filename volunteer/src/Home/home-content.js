import React, { Fragment } from 'react';

export class HeaderContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitEmployee = this.handleSubmitEmployee.bind(this);
    this.handleSubmitCaseworker = this.handleSubmitCaseworker.bind(this);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmitEmployee = (e)  => {
   this.props.toggle('EmployeeSignUpDialog');
   this.props.trigger(this.state.value);
  e.preventDefault();
  }

  handleSubmitCaseworker = (e) => {
    this.props.toggle('CaseWorkerSignUpDialog');
    this.props.trigger(this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <Fragment>
        <div className="col-xs-9 col-sm-12 col-md-12 col-lg-10  header-container">
          <div className="large">
            <p>Welcome to Charity Games</p>
          </div>
          <div className="small sigmarone">
            <p>Volunteer and win prizes and glory. It's that simple. </p>
          </div>
          <div className="small">
            <p>Charity Park is a kickstarter for businesses, communities and people with shared goals around the world.</p>
          </div>
          
          <form >
            <button onClick={(e) => this.handleSubmitEmployee(e)} className="employee" type="submit" value="EmployeeSignUpDialog">
              <p>Volunteer Sign Up</p>
            </button>
            <br/>
            <br/>
            <button onClick={(e) => this.handleSubmitCaseworker(e)} className="case-worker" type="submit" value="CaseWorkerSignUpDialog">
              <p>Organization Sign Up</p>
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}