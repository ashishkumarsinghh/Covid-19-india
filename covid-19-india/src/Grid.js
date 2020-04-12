import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import CoronaGraph from "./CoronaGraph";
const Site = (props) => (
  <Container fluid>
    <h1 className="masthead">Covid-19 - India</h1>
    <Row>
      <Col className="centertext deathbox">
        <h3> Deaths</h3>
        <h1 className="deaths">{props.deaths}</h1>
        <h5 className="deaths">
          Fatality : {((props.deaths * 100) / props.cases).toFixed(2)}%
        </h5>
      </Col>
      <Col className="centertext confirmbox">
        <h3>Confirmed</h3>
        <h1>{props.cases}</h1>
        <h5>Today : {props.today}</h5>
      </Col>

      <Col className="centertext recoverbox">
        <h3> Recovered</h3>
        <h1 className="recovered">{props.recovered}</h1>
        <h5 className="recovered">
          Recovery : {((props.recovered * 100) / props.cases).toFixed(2)}%
        </h5>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4 className="currstatus centertext">
          As of {props.uat}, India has {props.active} active cases and we have
          tested &nbsp;
          {props.tests} people.
        </h4>
      </Col>
    </Row>
    <Row>
      <Col>&nbsp;</Col>
      <Col sm={6}>
        {props.timeline && props.timelineKR && (
          <CoronaGraph
            timeline={props.timeline}
            timelineUSA={props.timelineUSA}
            timelineKR={props.timelineKR}
          />
        )}
      </Col>
      <Col>&nbsp;</Col>
    </Row>
    <Row>
      <Col>
        <h4 className="centertext currstatus">
          The world has {props.world.cases} people infected with Covid-19.{" "}
          <br />
          This deadly virus has taken lives of {props.world.deaths} people in
          the world.
        </h4>
      </Col>
    </Row>
  </Container>
);
export default Site;
