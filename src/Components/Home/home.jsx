import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Closet from '../../Assests/Closet1.jpg'
import Lamp from '../../Assests/Lamp.jpg'
import Bed from '../../Assests/Bed.png'
import Table1 from '../../Assests/Table1.jpg'
import Table2 from '../../Assests/Table2.jpg'
import Table3 from '../../Assests/Table3.jpg'
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


const home = () => {
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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Lamp}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bed}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>
    

  </div>
  )
}

export default home;