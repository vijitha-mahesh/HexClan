import React, { Component } from 'react';
import {Navbar,NavDropdown,Nav, Card} from 'react-bootstrap';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import inquiryform from './inquiryform';
import inquirylist from './inquirylist';
import './MainComponent.css';
import Logo from './logo.jpg';



export default class Main extends Component{

  render(){
    return(
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg"  variant="dark"    className="navbar">
          <Card>
              <Card.Img variant="top" className="card "src={Logo} />
         
          </Card>
          

          <Link to='/'><Navbar.Brand href="#home"><h4>Board-Me-In</h4></Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/'><Nav.Link href="#features" ><h5>Home</h5></Nav.Link></Link>
                    
        
                <NavDropdown title="Inquiry" id="collasible-nav-dropdown">
                  <h5>
                  <Link to={'/addnew'}><NavDropdown.Item href="#addnewinquiry">Add New Inquiry</NavDropdown.Item></Link>
                    <Link to='/inquirylist'><NavDropdown.Item href="#inquirylist">Inquiry List</NavDropdown.Item></Link>

                  </h5>
                    
          
                </NavDropdown>
                </Nav>

                
        
      
              </Navbar.Collapse>
            </Navbar>
      
                <Switch>
                  
                  <Route exact path='/addnew' component={inquiryform}/>
                  <Route exact path='/inquirylist' component={inquirylist}/>
                  

                </Switch>
          </div>
     </Router>
    );
}
}

