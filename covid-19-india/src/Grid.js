import React from "react";
import Patient from "./Patient";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
const Site = props => (
  <Container fluid>
    <h1 className="masthead">Covid-19 - India</h1>
    <img src="covid.jpg" alt="logo" className="logo" />
    <hr />
    <Row>
      <Col className="centertext">
        <h3> Deaths</h3>
        <h1 className="deaths">{props.deaths}</h1>
        <h5 className="deaths">
          Fatality Rate : {((props.deaths * 100) / props.cases).toFixed(2)}%
        </h5>
      </Col>
      <Col className="centertext">
        <h3>Confirmed</h3>
        <h1>{props.cases}</h1>
        <h5>Official : {props.official}</h5>
      </Col>

      <Col className="centertext">
        <h3> Recovered</h3>
        <h1 className="recovered">{props.recovered}</h1>
        <h5 className="recovered">
          Recovery Rate : {((props.recovered * 100) / props.cases).toFixed(2)}%
        </h5>
      </Col>
    </Row>
    <hr />
    <CardColumns>
      {props.details &&
        props.details.map(item => (
          <Patient details={item} key={item.patientId} />
        ))}
    </CardColumns>
  </Container>
);
export default Site;
