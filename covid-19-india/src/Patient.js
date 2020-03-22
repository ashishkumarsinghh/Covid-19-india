import React from "react";
import { Card } from "react-bootstrap";
export default function Patient(props) {
  return (
    <React.Fragment>
      {/* <div className="patientDetail">
        <h2>Patient ID : {props.details && props.details.patientId}</h2>
        <p>Reported on {props.details && props.details.reportedOn}</p>
        <p>
          {props.details && props.details.city} ,
          {props.details && props.details.state}
        </p>
        <p>{props.details && props.details.notes}</p>
      </div> */}

      <Card>
        <Card.Body>
          <Card.Title>
            Patient ID : {props.details && props.details.patientId}
          </Card.Title>
          <Card.Text>
            Reported on {props.details && props.details.reportedOn}
            {props.details && props.details.city} ,
            {props.details && props.details.state}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {props.details && props.details.notes}
          </small>
        </Card.Footer>
      </Card>
    </React.Fragment>
  );
}
