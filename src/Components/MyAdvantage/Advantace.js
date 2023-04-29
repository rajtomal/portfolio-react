import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CountUp from 'react-countup';

import "./Advantace_modul.css"

function Advantace() {
  return (
    <section className='advantace-part'>
    <Container>
        <Row>
            <Col lg={{span: 4}} md={12} sm={10} className="exprence-row-part">
                    <div className="advantace-exprence">
                        <h1>02+</h1>
                        <p> Years of Experience</p>
                        <div className="advantace-clients">
                            <div className="advantace-child">
                                <h2><CountUp delay={1}  end={99} />%</h2>
                                <p>Clients<br></br>
                                Satisfections</p>
                            </div>
                        </div>
                    </div>
            </Col>
            <Col lg={{span: 6, offset: 2 }} md={{span: 12}} sm={{span: 6}}>
                <div className="advantace-text">
                    <h1>My Advantage</h1>
                    <p>I have been addicted to Advanced Design and Coding. I have hands-on experience efficiently using Photoshop, Figma, HTML, CSS, JavaScript, React, Angular, JQuery, and Bootstrap. I'm experienced and qualified in Website Design I always work with the requirements in order to arrive as close as we can to the expectations.</p>
                </div>
                <div className="advantage-exp">
                    <Row>
                        <Col md={4} sm={6} lg={4} xs={6} className="pt-4">
                            <div className="technology">
                                <div className="all-technology figma">
                                    <h1><CountUp delay={1} end={87} />%</h1>
                                    <h5>Figma</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} lg={4} xs={6} className="pt-4">
                            <div className="technology photoshop">
                                <div className="all-technology ">
                                    <h1><CountUp delay={1} end={74} />%</h1>
                                    <h5>Photoshop</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} lg={4} xs={6} className="pt-4">
                            <div className="technology html-css">
                                <div className="all-technology">
                                    <h1><CountUp delay={1} end={92} />%</h1>
                                    <h5>HTML, CSS</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} lg={4} xs={6} className="pt-4">
                            <div className="technology javascript">
                                <div className="all-technology">
                                    <h1><CountUp delay={1} end={44} />%</h1>
                                    <h5>Javascript</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} lg={4} xs={6} className="pt-4">
                            <div className="technology react">
                                <div className="all-technology ">
                                    <h1><CountUp delay={1} end={55} />%</h1>
                                    <h5>React</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} lg={4} xs={6} className="pt-4">
                            <div className="technology angular">
                                <div className="all-technology">
                                    <h1><CountUp delay={1} end={52} />%</h1>
                                    <h5>Angular</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Advantace;