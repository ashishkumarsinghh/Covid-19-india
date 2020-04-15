import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import CoronaGraph from "./CoronaGraph";
const Site = (props) => (
  <Container fluid>
    <Row className="mainheader">
      <Col>
        <h1 className="masthead">Covid-19 - India</h1>
      </Col>
    </Row>
    <Row className="mainheader">
      <Col className="logoimg">
        <img
          src="corona.png"
          height="80px"
          width="80px"
          alt="corona logo"
          className="ui img center"
        />
      </Col>
    </Row>
    <Row className="countermain">
      <Col className="centertext deathbox">
        <h3>
          {" "}
          <b>Deaths</b>
        </h3>
        <h1 className="deaths">{props.deaths}</h1>
        <h5 className="deaths">
          Fatality :{" "}
          {((props.deaths * 100) / (props.deaths + props.recovered)).toFixed(2)}
          %
        </h5>
      </Col>
      <Col className="centertext confirmbox">
        <h3>
          <b>Confirmed</b>
        </h3>
        <h1>{props.cases}</h1>
        <h5>Today : {props.today}</h5>
      </Col>

      <Col className="centertext recoverbox">
        <h3>
          <b>Recovered</b>{" "}
        </h3>
        <h1 className="recovered">{props.recovered}</h1>
        <h5 className="recovered">
          Recovery :{" "}
          {((props.recovered * 100) / (props.deaths + props.recovered)).toFixed(
            2
          )}
          %
        </h5>
      </Col>
    </Row>
    <Row className="status">
      <Col>
        <h4 className="currstatus centertext">
          As of <u>{props.uat}</u>, India has <u>{props.active}</u> active cases
          and we have tested &nbsp;
          <u>{props.tests}</u> people.
        </h4>
      </Col>
    </Row>
    <Row className="world">
      <Col>
        <h4 className="centertext currstatus">
          The world has <u>{props.world.cases}</u> people infected with
          Covid-19. <br />
          <br />
          This deadly virus has taken lives of <u>{props.world.deaths}</u>{" "}
          people in the world.
        </h4>
      </Col>
    </Row>
    <Row>
      <Col>&nbsp;</Col>
      <Col sm={6}>
        <h5 className="centertext graphtitle">
          Covid-19 Cases Comparison India vs South Korea
        </h5>
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
    <Row className="footerrow">
      <Col>
        <div className="footer">
          Developed by &nbsp;
          <a href="https://github.com/ashishkumarsinghh">Ashish Kumar Singh.</a>
          . Font Suggested by{" "}
          <a href="https://www.linkedin.com/in/pramodbhadana/">
            Pramod Bhadana.
          </a>
        </div>
      </Col>
    </Row>
  </Container>
);
export default Site;
