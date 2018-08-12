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
          </div>
          <div className="small sigmarone">
            <p>Volunteer and win prizes and glory. It's that simple. </p>
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