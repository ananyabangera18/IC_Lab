import React from 'react';
import { Navbar, Nav, Carousel, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#destination">Destination</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Content */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
            style={{ width: "150px", height: "400px" }} 
          />
          <Carousel.Caption>
            <h3>BALI</h3>
            <p>Bali is the most popular island holiday destination in the Indonesian archipelago..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1503152394-c571994fd383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
            style={{ width: "150px", height: "400px" }}
          />
          <Carousel.Caption>
            <h3>GREECE</h3>
            <p>Greece has the longest coastline in Europe and is the southernmost country in Europe. .</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
              <Card.Body>
                <Card.Title>BALI </Card.Title>
                <Card.Text>
                  Get a 4N,5D Bali package at a discount of 40%!!.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
              <Card.Body>
                <Card.Title>DENMARK</Card.Title>
                <Card.Text>
                Get a 3N,4D Denmark tour package at a discount of 50%!.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1503152394-c571994fd383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
              <Card.Body>
                <Card.Title>GREECE</Card.Title>
                <Card.Text>
                  Experience Greece at amazing discounts upto 45% off!.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-light">
        &copy; 2023 Travel Website. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;




