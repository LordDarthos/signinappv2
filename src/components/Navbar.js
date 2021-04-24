import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
//crear hook para desplegar o no link de add notes

const Barnavigator = ({userSession, handleLogoutUser}) => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">NotesWeb</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        
        <Nav.Link href="/">Home</Nav.Link> 
        <Nav.Link href="/about">About</Nav.Link>
        
      </Nav>
      <Nav>
      
        {
          (userSession) 
          ? 
          <React.Fragment>
            <Nav.Link href="/notes/new-note">Add Note</Nav.Link>
            <Nav.Link href="/notes">Show Notes</Nav.Link>
          </React.Fragment>
          : ""
        }
      
        
      </Nav>
      <NavDropdown title="User Menu" id="collasible-nav-dropdown">
        {
          (userSession) 
          ? 
          <React.Fragment>
            <NavDropdown.Item onClick={handleLogoutUser}>Sign Out</NavDropdown.Item>
          </React.Fragment>
          
          :
          <React.Fragment>
            <NavDropdown.Item href="/users/signin">Sign In</NavDropdown.Item>
            <NavDropdown.Item href="/users/signup">Sign Up</NavDropdown.Item>
          </React.Fragment> 
          
        }
        {/* <NavDropdown.Item href="/users/signin">Sign In</NavDropdown.Item>
        <NavDropdown.Item href="/users/signup">Sign Up</NavDropdown.Item> */}
      </NavDropdown>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar.Collapse>
    </Navbar>
  )
}

export default Barnavigator;