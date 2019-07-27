import React, { Component, Fragment } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      fullname: ''
    }
  }
  componentDidMount() {
    let fullname = localStorage.getItem('_Fullname')
    if (fullname !== '') {
      this.setState({ fullname })
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <Navbar style={{ width: '100%', position: 'fixed', zIndex: 2 }} color="dark" dark expand="md">
        <NavbarBrand href="/">Nam Thao Fashion</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            {this.state.fullname ?
              (<Fragment>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                   {this.state.fullname}
            </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Logout
              </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Fragment>) :
              <Fragment>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/register">Register</NavLink>
                </NavItem>
              </Fragment>
            }
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header