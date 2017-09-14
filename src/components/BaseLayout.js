import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/App.css';

export default class BaseLayout extends React.Component {
  render () {
    return (
        <div>
          <Navbar id='Nbar' color="faded" light toggleable>
            <img className='Logo' style={{height: '20vh', width: '25.5vh'}}/>
              <NavbarBrand href='/' style={{color: 'red', fontWeight: '800', fontSize: '30px', textShadow: '2px 2px 4px black'}}>All-Star Security</NavbarBrand>
              <Nav className="ml-auto">
              <NavItem>
                <NavLink><Link to="/ContactCenter" style={{color: 'red', fontWeight: '600', textShadow: '1px 1px 2px black'}}>Contact Center</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/VideoSurveillance" style={{color: 'red', fontWeight: '600', textShadow: '1px 1px 2px black'}}>Video Surveillance</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/Test" style={{color: 'red', fontWeight: '600', textShadow: '1px 1px 2px black'}}>How To Test</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/AboutUs" style={{color: 'red', fontWeight: '600', textShadow: '1px 1px 2px black'}}>About Us</Link></NavLink>
              </NavItem>
              </Nav>
            <img className='Logo1' style={{height: '20vh', width: '25.5vh'}} />
          </Navbar>
        <div className="home">
          {this.props.children}
        </div>

        <div className='footer'>
          <center className='copy' style={{color: 'red', fontWeight: '100', textShadow: '1px 1px 2px black'}}> Copyright 2017 </center>
        </div>

        </div>

    )
  }
}
