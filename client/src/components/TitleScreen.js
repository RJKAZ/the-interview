
import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import UserInfoContext from '../utils/UserInfoContext';
import AuthService from '../utils/auth';
import landingimage from '../story/sprites/landingPageResized.jpg';

function TitleScreen(props) {
   // set modal display state
   const [showModal, setShowModal] = useState(false);
   // get username out of context object to display in nav
   const { username } = useContext(UserInfoContext);
  return (
   <>
     <Navbar bg='white' variant='white' expand='lg'>
        <Container fluid>
         
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'> 
              {/* if user is logged in show saved books and logout */}
              {username ? (
                <>
                  <Nav.Link>
                  {username}
                  </Nav.Link>
                  <Nav.Link onClick={AuthService.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>


    <div className="overlay" id="title-overlay">
      <img
      src={landingimage}
      />
      <div id="title-screen-header">
        <ul id="menu">
          <li>
            <span onClick={props.beginStory}>Begin The Story from the Start!</span>
          </li>
          <li>
            <span onClick={props.goToInterview}>Just head to the Interview!</span>
          </li>
          
        </ul>
      </div>
    </div>
    </>
    
  );
}

export default TitleScreen;