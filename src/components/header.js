import PropTypes from 'prop-types'
import React from 'react'
import mylogo from '../images/AdminLogo.svg'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" light expand="sm">
          <div className="container">
          <img src={mylogo} width="40px" alt="My Logo" />
            <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
            {/* Close mark */}
            <div id="close-icon" className={this.state.isOpen ? "open" : "" }>
            <span></span>
            <span></span>
            <span></span>
            </div>
            {/* close mark ends */}
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="/tags">Tags</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">AboutUs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/privacy">PrivacyPolicy</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/terms">TermsAndCondition</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">ContactUs</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
