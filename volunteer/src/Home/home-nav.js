import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

export class HomeNav extends React.Component {

  constructor(props) {
    super(props);
    this.promptDialog = this.promptDialog.bind(this);
}

  promptDialog = (type) => { 
     this.props.handleOnClick(type);
  }

    render() {
        return (<nav  style={{background: this.props.hasScrolled ? '#252857' : ''}}  className=" landing navbar-inverse navbar navbar-expand-md navbar-dark fixed-top bg-bootstrap">
            <a className="logo navbar-brand mr-0 mr-md-2">
                <img className="d-inline-block align-top" src={logo} alt="logo" />
            </a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <ul className="navbar-nav ml-auto mr-0">
                    {/* <li onClick={() => this.promptDialog('LoginDialog')}  className="nav-item pointer"> */}
                    <li className="nav-item pointer">
                        {/* <a className="nav-link">LOG IN</a>                     */}
                        <Link to="/dashboard">Log In</Link>
                    </li>
                </ul>
            </div>
        </nav>);
    }
}



