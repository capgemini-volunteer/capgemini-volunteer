import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class CaseWorkerSignupType extends React.Component {
  constructor(props) {
    super(props);
    this.promptDialog = this.promptDialog.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.gotoNextPage = this.gotoNextPage.bind(this);
    this.state = {
      dropdownOpen: false,
      cat1: "Animals"
    };  
  }

  promptDialog = (type) => {
    this.props.toggle(type);
    setTimeout(function () {
      this.props.toggle(type);
    }.bind(this), 10)
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  onCategorySel(cat) {
    this.setState({
      cat1: cat
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  gotoNextPage() {
    this.props.toggle();
    fetch('http://localhost:8080/api/register/', {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(this.state)
      })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
  }

  render() {
    const externalCloseBtn =
      <button className="close external"
        onClick={this.props.toggle}>
        <i className="material-icons md-36 text-light"> close</i>
      </button>;
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} external={externalCloseBtn}>
        <ModalHeader >{this.props.title}</ModalHeader>
        <ModalBody>
          <form name="login" noValidate="">
            {/* Street */}
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Street:</label>
              <input type="text" name="street" id="street" className="form-control input" required="" onChange={this.handleInputChange} />
              <span className=" hidden help-block">Street is required</span>
            </div>
            {/* City */}
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">City:</label>
              <input type="text" name="city" id="city" className="form-control input" required="" onChange={this.handleInputChange}/>
              <span className="hidden help-block">City is required</span>
            </div>
            {/* State */}
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">State:</label>
              <input type="text" name="state" id="state" className="form-control input" required="" onChange={this.handleInputChange} />
              <span className="hidden help-block">State is required</span>
            </div>
            {/* Zipcode */}
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Zipcode:</label>
              <input type="number" name="zipcode" id="zipcode" className="form-control input" required="" onChange={this.handleInputChange} />
              <span className="hidden help-block">Zipcode is required</span>
            </div>
            {/* Country */}
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Country:</label>
              <input type="text" name="country" id="country" className="form-control input" required="" onChange={this.handleInputChange} />
              <span className="hidden help-block">Country is required</span>
            </div>
            {/* Phone */}
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Phone</label>
              <input type="text" name="phone" id="phone" className="form-control input" required="" onChange={this.handleInputChange} />
              <span className="hidden help-block">Phone number is required</span>
            </div>

            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Category:</label>
              <br/>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle 
                    color="#325125"
                    caret>
                  {this.state.cat1}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem  onClick={() => this.onCategorySel("Animals")}>Animals</DropdownItem>
                  <DropdownItem  onClick={() => this.onCategorySel("Children & Youth")}>Children Youth</DropdownItem>
                  <DropdownItem  onClick={() => this.onCategorySel("Disaster Relief")}>Disaster Relief</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>

          </form>
        </ModalBody>

        <ModalFooter>
          <div className="form-actions col-12">
            <Button className=" col-12 " color="success" onClick={this.gotoNextPage}>Complete Sign Up</Button>
            <br />
          </div>
        </ModalFooter>

      </Modal>

    );
  }
}