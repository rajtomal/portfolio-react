import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Typed from "typed.js";
import { useEffect, useRef } from "react";

import "./Slider_modul.css"
import '../Navber/Navber_modul.css'
import Slider_img from '../../images/slider-img.png'
import Html from '../../images/html.png'
import Figma from '../../images/figma.png'
import Js from '../../images/javascript.png'
import Css from '../../images/css.png'
import Psd from '../../images/photoshop.png'
import React from '../../images/react.png'

function Slider() {

    // typed JS start
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Frontend Developer", "UI/UX Designer", "Figma, PSD Designer"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          loop: true,
          cursorChar: "|",
          backDelay: 100
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
      // typed JS End
    

  return (
    <div className="slider-part">
        <Container>
        <Row>
            <Col lg={6} md={12} sm={6} className="slider-all-text">
                <div className="slider-text">
                    <p>Welcome to my world</p>
                    <h2>Hi, I am <span>Tomal.M</span></h2>
                    <h3>I'm a <span ref={el}></span></h3>
                    <p className='slider-p'>I am always working on new thinking and trends.<br />
                        The client's Happiness is everything to me.</p>
                    
                    <a className='nav-btn slider-btn' href="#">HIRE ME</a>
                </div>
            </Col>
            <Col lg={6} md={12} sm={6}>
                <div className="slider-img">
                    <img src={Slider_img} alt="" />
                        <div className="html-animation">
                            <img src={Html} alt="html" />
                        </div>
                        <div className="figma-animation">
                            <img src={Figma} alt="figma" />
                        </div>
                        <div className="js-animation">
                            <img src={Js} alt="figma" />
                        </div>
                        <div className="css-animation">
                            <img src={Css} alt="figma" />
                        </div>
                        <div className="psd-animation">
                            <img src={Psd} alt="figma" />
                        </div>
                        <div className="react-animation">
                            <img src={React} alt="figma" />
                        </div>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
  );
}

export default Slider;