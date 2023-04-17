
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Closet from '../../Assests/Closet1.jpg'
import Lamp from '../../Assests/Lamp.jpg'
import Bed from '../../Assests/Bed.png'
import HarryPotter from '../../Assests/HarryPotter.jpg'
import Table2 from '../../Assests/Table2.jpg'
import Table3 from '../../Assests/Table3.jpg'
import iphone13 from '../../Assests/iphone13.jpg'
import Jacket1 from '../../Assests/Jacket1.jpeg'
import Chair from '../../Assests/chair.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom'




const Home = () => {
  const navigate = useNavigate();
  const productDetails = ()=>{
    navigate('/ProductDetails')
  }
  return (
    <div>

      {/* Carousel----- */}
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Closet}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Small hanging closet</h3>
          <p>Only for $30</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Lamp}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Table lamp</h3>
          <p>Only for $15</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bed}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Queen size bed</h3>
          <p>
          Only for $200
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>

    <div class="container-header">
      <p class="section-head-p">View Popular Items</p>
    </div>
    <br>
    </br>

    {/* Card----- */}
    <Container>
      <Row>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={iphone13} />
      <Card.Body>
        <Card.Title>iphone13</Card.Title>
        <Card.Text>
          $550 <br></br> iphone 13 color - Sierra Blue in excellent condition. 
        </Card.Text>
        <Button variant="primary" onClick={productDetails}>Details</Button>
      </Card.Body>
    </Card><br></br></Col>
    <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Table2} />
      <Card.Body>
        <Card.Title>Coffee Table</Card.Title>
        <Card.Text>
          $25<br></br> Wooden Coffee Table in good condition.
        </Card.Text>
        <Button variant="primary" onClick={productDetails}>Details</Button>
      </Card.Body>
    </Card><br></br></Col>
    <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Table3} />
      <Card.Body>
        <Card.Title>Study Table</Card.Title>
        <Card.Text>
          $45<br></br> Solid wooden with galaxy patteren study table. 
        </Card.Text>
        <Button variant="primary" onClick={productDetails}>Details</Button>
      </Card.Body>
    </Card><br></br></Col>
    {/* </Row><Row> */}
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Chair} />
      <Card.Body>
        <Card.Title>Office Chair</Card.Title>
        <Card.Text>
          $45<br></br> Moveable office chair, can be used as study chair.
        </Card.Text>
        <Button variant="primary" onClick={productDetails}>Details</Button>
      </Card.Body>
    </Card><br></br></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={HarryPotter} />
      <Card.Body>
        <Card.Title>Harry Potter Book</Card.Title>
        <Card.Text>
          $10.<br></br>Harry Potter and the Philosopher's Stone.
        </Card.Text>
        <Button variant="primary" onClick={productDetails}>Details</Button>
      </Card.Body>
    </Card><br></br></Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Jacket1} />
      <Card.Body>
        <Card.Title>Jacket</Card.Title>
        <Card.Text>
          $45<br></br>Puffer jacket in very good condition. Brown color.
        </Card.Text>
        <Button variant="primary" onClick={productDetails}>Details</Button>
      </Card.Body>
    </Card><br></br></Col>
      </Row>
    </Container>
    <br></br>
    
    <div class="container-header">
      <p class="section-head-p">Frequently asked questions</p>
    </div>
    <br>
    </br>

    {/* Accordian----- */}
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q1. What is the cost of a NEU DEALS account ?</Accordion.Header>
        <Accordion.Body>
        It is free to register for an NEUDeals Business account. There’s no long-term commitment, and no minimum spend.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Q2. What kind of products are available to buy on NEU DEALS ?</Accordion.Header>
        <Accordion.Body>
        NEU DEALS is a website for all your day-to-day purchases, whether you’re buying home supplies, furnitures, or decor items. With access to tens of thousands of different suppliers, you’ll find everyday low business pricing on hundreds of millions of products. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Q3. Who buys on NEU DEALS ?</Accordion.Header>
        <Accordion.Body>
        NEU DEALS customers range from undergraduates to graduates within the NEU campus with tens of thousands of students. We serve millions of student customers around the campus with NEU login access.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <br></br>
    
    {/* Button----- */}
    <div>
    <Button variant='danger'>Post questions<br></br></Button>
    <br></br>
    </div>

    {/* Alert------ */}
    <br></br><br></br><br></br><div class="alert alert-info" role="alert">
    <strong>Heads up! This alert needs your attention ! The Big Summer Sale is 
    almost coming to an end ! Hurry Up !</strong>
  </div>

  {/* ProgressBar------ */}
  <ProgressBar animated now={75} />;


  </div>
  )
}

export default Home;

