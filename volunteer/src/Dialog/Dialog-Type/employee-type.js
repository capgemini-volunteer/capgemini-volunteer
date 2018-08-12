import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export class EmployeeSignupType extends React.Component {

  constructor(props) {
    super(props);
    this.promptDialog = this.promptDialog.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onDepartmentSel = this.onDepartmentSel.bind(this);
    this.state = {
      dropdownOpen: false,
      department: "Marketing"
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

  onDepartmentSel(dep) {
    this.setState({
      department: dep
    });
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
            {/* Job Title */}
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Job Title:</label>
              <input name="email" id="email" className="form-control input" required="" />
              <span className="hidden help-block">Email or phone number is required</span>
            </div>

            {/* Zipcode */}
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Zipcode:</label>
              <input type="number" name="number" id="number" className="form-control input" required="" />
              <span className=" hidden help-block">Department is required</span>
            </div>

            {/* Department */}
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Department:</label>
              <br/>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle 
                    color="#325125"
                    caret>
                  {this.state.department}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem  onClick={() => this.onDepartmentSel("Marketing")}>Marketing</DropdownItem>
                  <DropdownItem  onClick={() => this.onDepartmentSel("Sales")}>Sales</DropdownItem>
                  <DropdownItem  onClick={() => this.onDepartmentSel("IT")}>IT</DropdownItem>
                  <DropdownItem  onClick={() => this.onDepartmentSel("DevOps")}>DevOps</DropdownItem>
                  <DropdownItem  onClick={() => this.onDepartmentSel("Legal")}>Legal</DropdownItem>
                </DropdownMenu>
            </Dropdown>
              <span className=" hidden help-block">Zipcode is required</span>
            </div>

          </form>
        </ModalBody>

        <ModalFooter>
          <div className="form-actions col-12">
            <Button className=" col-12 " color="success" onClick={this.props.toggle}>Complete Sign Up</Button>
            <br />
          </div>
        </ModalFooter>

      </Modal>

    );
  }
}