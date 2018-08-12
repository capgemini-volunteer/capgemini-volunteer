import React, { Fragment } from 'react';

export class HeaderContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e)  => {
   this.props.toggle('SignUpDialog');
   this.props.trigger(this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <Fragment>
        <div className="col-xs-9 col-sm-12 col-md-12 col-lg-10  header-container">
          <div className="large">
            <p>Welcome to Charity Games</p>
<<<<<<< HEAD:volunteer/src/Home/header-content.js
=======
          </div>
          <div className="small sigmarone">
            <p>Volunteer and win prizes and glory. It's that simple. </p>
<<<<<<< 6b9d3d910843b2c20831416534fc5a1d78b0cb97
=======
>>>>>>> template:volunteer/src/Home/home-content.js
          </div>
          <div className="small sigmarone">
            <p>Volunteer and win prizes and glory. It's that simple. </p>
          <div className="small">
            <p>Charity Park is a kickstarter for businesses, communities and people with shared goals around the world.</p>
>>>>>>> Merge with master
          </div>
          
          <form onSubmit={this.handleSubmit}>
            <button className="employee" type="submit">
              <p>Volunteer Sign Up</p>
            </button>
            <br/>
            <br/>
            <button className="case-worker" type="submit">
              <p>Organization Sign Up</p>
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}