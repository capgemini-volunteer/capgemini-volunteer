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
            <p>Join the movement</p>
          </div>
          <div className="small">
            <p>Gotribeo is a kickstarter for businesses, communities and people with shared goals around the world.</p>
          </div>

          <form onSubmit={this.handleSubmit}>
            <button className="case-worker" type="submit">
              <p>Employee Sign Up</p>
            </button>
            <br/>
            <br/>
            <button className="employee" type="submit">
              <p>Case Worker Sign Up</p>
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}