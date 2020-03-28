import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import CoronaGraph from "./CoronaGraph";
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
        <h5>Today : {props.today}</h5>
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
    <Row>
      <Col>&nbsp;</Col>
      <Col sm={6}>
        <h3 className="centertext">Corona Graph</h3>
        <CoronaGraph timeline={props.timeline} />
      </Col>
      <Col>&nbsp;</Col>
    </Row>
    <hr />
    <Row>
      <Col>&nbsp;</Col>

      <Col sm={6} className="worldstats centertext">
        <h2>Covid-19 World Stats</h2>
        <h4>Total Cases: {props.world.cases}</h4>
        <h4 className="deaths">Deaths: {props.world.deaths}</h4>
        <h4 className="recovered">Recovered: {props.world.recovered}</h4>
        <p>Updated at : {new Date(props.world.updated).toLocaleDateString()}</p>
      </Col>
      <Col>&nbsp;</Col>
    </Row>
  </Container>
);
export default Site;
