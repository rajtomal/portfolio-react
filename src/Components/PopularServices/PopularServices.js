import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import "./PopularServices_modul.css";

// fontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '@iconify/react';



function PopularServices() {
    return (
        <section className='popular-part'>
            <Container>
                <Row className='popular-row'>
                    <Col lg={6} md={6} sm={6}>
                        <div className="popular-hadding">
                            <h1>Popular Services</h1>
                            <p>I combine my thoughts with the demands of your project. And it is done to get you to your destination. That is why we proceed according to these steps. The steps will be reduced or increased as per your demand according to the project. </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Tabs
                        defaultActiveKey="Design"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab className="design-part" eventKey="Design" title="Design">
                            <Row>
                                <Col lg={4} md={6} sm={12} className='pt-4'>
                                    <div className="main-design">
                                        <div className="design-icon">
                                            <Icon icon="fluent:design-ideas-20-regular" />
                                        </div>
                                        <h2>Graphic Design</h2>
                                        <p>The main task of graphics design is to work according to a specific plan. Such as logo design, banner design, and web template. Designed to give the user a better experience.</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12} className='pt-4'>
                                    <div className="main-design">
                                        <div className="design-icon">
                                            <Icon icon="carbon:application-mobile" />
                                        </div>
                                        <h2>Mobile Screen Design</h2>
                                        <p>A mobile user interface (mobile UI) is the graphical and usually touch-sensitive display, such as a smartphone or tablet, that allows the user features, content and functions.</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12} className='pt-4'>
                                    <div className="main-design">
                                        <div className="design-icon">
                                            <Icon icon="iconoir:laptop-fix" />
                                        </div>
                                        <h2>UI/UX Design</h2>
                                        <p>UX Design refers to the term User Experience Design, while UI Design stands for User Interface Design. Both elements are crucial to a product and work closely together.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="Development" title="Development">
                        <Row>
                                <Col lg={4} md={6} sm={12}  className='pt-4'>
                                    <div className="main-design">
                                        <div className="design-icon">
                                            <Icon icon="ph:code-light" />
                                        </div>
                                        <h2>WebSite Design</h2>
                                        <p>Web Design Various skills and disciplines in website creation and maintenance. Different areas of web design include UI and UX design. UI design means user interface design.</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12} className='pt-4'>
                                    <div className="main-design">
                                        <div className="design-icon">
                                            <Icon icon="tabler:device-desktop-code" />
                                        </div>
                                        <h2>Front End Development</h2>
                                        <p>Front-end web development, also known as client-side development is the producing HTML, CSS, JavaScript, Angular and React for a Web Application so user can see and interact with them directly.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </section>
    )
}

export default PopularServices;