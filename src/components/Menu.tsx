import React from 'react';
import { Link } from 'react-router-dom';
import useScroll from '../hooks/use-scroll';
import { Github } from './shared/icons';

export default function Menu() {
  const scrolled = useScroll(50);
  return (
    <div
      className={`fixed top-0 w-full ${
        scrolled
          ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
          : 'bg-white/0'
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
        <Link to="/" className="flex items-center font-display text-2xl">
          <p>Image Restoration</p>
        </Link>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
  //   <Container>
  //     <Navbar.Brand href="#home">Image Restore</Navbar.Brand>
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //     <Navbar.Collapse id="responsive-navbar-nav">
  //       <Nav className="me-auto">
  //         <Nav.Link>
  //           {' '}
  //           <Link className="text-decoration-none text-white" to="/">
  //             Home
  //           </Link>
  //         </Nav.Link>
  //         <Nav.Link>
  //           {' '}
  //           <Link className="text-decoration-none text-white" to="/about">
  //             About
  //           </Link>
  //         </Nav.Link>
  //         <Nav.Link>
  //           {' '}
  //           <Link className="text-decoration-none text-white" to="/contact">
  //             Contact Us
  //           </Link>
  //         </Nav.Link>
  //       </Nav>
  //       {/* <Nav className="gap-2"> */}
  //       {/*  <Nav.Link className="btn btn-primary" href="#">Login</Nav.Link> */}
  //       {/*  <Nav.Link eventKey={2} className="btn btn-light text-black" href="#"> */}
  //       {/*    Sign up */}
  //       {/*  </Nav.Link> */}
  //       {/* </Nav> */}
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  );
}
