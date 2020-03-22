import React from "react";
import Patient from "./Patient";
import { Container, Row, Col, Image } from "react-bootstrap";
const Site = props => (
  <Container fluid>
    <Row>
      <Col>
        <h1 className="masthead">Covid-19 - India</h1>
        <Image src="covid.jpg" alt="logo" />
      </Col>
    </Row>
    <Row>
      <Col>
        <h3> Deaths</h3>
        <h1 className="deaths">{props.deaths}</h1>
        <h5 className="deaths">
          Fatality Rate : {((props.deaths * 100) / props.cases).toFixed(2)}%
        </h5>
      </Col>
      <Col>
        <h3>Confirmed</h3>
        <h1>{props.cases}</h1>
        <h5>Official : {props.official}</h5>
      </Col>

      <Col>
        <h3> Recovered</h3>
        <h1 className="recovered">{props.recovered}</h1>
        <h5 className="recovered">
          Recovery Rate : {((props.recovered * 100) / props.cases).toFixed(2)}%
        </h5>
      </Col>
    </Row>
    <Row>
      {props.details &&
        props.details.map(item => (
          <Col xs={6} md={4}>
            <Patient details={item} />
          </Col>
        ))}
    </Row>
  </Container>
);
export default Site;
