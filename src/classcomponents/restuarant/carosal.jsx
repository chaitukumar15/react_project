import { Component } from "react";

import Carousel from 'react-bootstrap/Carousel';

class   Caros extends Component{



    render(){

        return(


            <>
            <Carousel>
      <Carousel.Item>
      <img src="https://miro.medium.com/v2/resize:fit:1400/0*RPnhGYC-I73DegE0.png" alt="image" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://miro.medium.com/v2/resize:fit:1400/0*RPnhGYC-I73DegE0.png" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://miro.medium.com/v2/resize:fit:1400/0*RPnhGYC-I73DegE0.png" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            

            
            </>
        )
    }


}

export default Caros;