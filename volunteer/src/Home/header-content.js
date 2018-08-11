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
        <div className="img-wrapper">
          {/* <img className="globe-img" src={globe} alt="globe" />
          <img className="particle-img" src={particle} alt="logo" />
          <img className="moon-img" src={moon} alt="moon" /> */}
        </div>
        <span className="header-circle">
        </span>
        <span className="header-circle">
        </span>
        <span className="header-circle">
        </span>
        <div className="col-xs-9 col-sm-12 col-md-12 col-lg-10  header-container">
          <div className="large">
            <p>Join the movement</p>
          </div>
          <div className="small">
            <p>Gotribeo is a kickstarter for businesses, communities and people with shared goals around the world.</p>
          </div>

          <form onSubmit={this.handleSubmit}>
            <button type="submit">
              <p>Get Started</p>
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}