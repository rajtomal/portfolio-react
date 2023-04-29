import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// slick slider
import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Icon } from '@iconify/react';

import './RecentWork_modul.css'

// images
import AE from '../../images/project/17.svg'
import App from '../../images/project/3.svg'
import Celestial from '../../images/project/14.svg'
import SafeRide from '../../images/project/15.svg'
import Statpile from '../../images/project/16.svg'
import T2M from '../../images/project/10.svg'

export default class RecentWork extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            centerPadding: "60px",
            slidesToScroll: 1,
            nextArrow: <Icon icon="ic:baseline-arrow-right" />,
            prevArrow: <Icon icon="ic:baseline-arrow-right" rotate={2} />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        infinite: true
                    }
                }
            ]
        };
        return (
            <section className='recent-work-part'>
                <Container>
                    <h2>Recent Work</h2>
                    <p>Here is a sample project of my work. <br /> These will give you a good idea.</p>
                    <Slider {...settings}>
                        <div className='main-part'>
                            <div className="img-part">
                                <img src={AE} alt="slider" />
                            </div>
                            <h3>AE Fashion</h3>
                            <p>UI/UX / Web Design</p>
                        </div>
                        <div className='main-part'>
                            <div className="img-part">
                                <img src={Statpile} alt="slider" />
                            </div>
                            <h3>Statpile</h3>
                            <p>UI/UX / Web Design</p>
                        </div>
                        <div className='main-part'>
                            <div className="img-part">
                                <img src={Celestial} alt="slider" />
                            </div>
                            <h3>Celestial Unity</h3>
                            <p>Development / Web Design</p>
                        </div>
                        <div className='main-part'>
                            <div className="img-part">
                                <img src={App} alt="slider" />
                            </div>
                            <h3>App Screen</h3>
                            <p>Branding App Design</p>
                        </div>
                        <div className='main-part'>
                            <div className="img-part">
                                <img src={T2M} alt="slider" />
                            </div>
                            <h3>T2M Website</h3>
                            <p>UI/UX / Web Design</p>
                        </div>
                        <div className='main-part'>
                            <div className="img-part">
                                <img src={SafeRide} alt="slider" />
                            </div>
                            <h3>SafeRide</h3>
                            <p>UI/UX / Web Design</p>
                        </div>
                    </Slider>
                </Container>
            </section>
        );
    }
}