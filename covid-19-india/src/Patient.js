import React from "react";

import { Card } from "semantic-ui-react";

export default function Patient(props) {
  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header>
            Patient ID : {props.details && props.details.patientId}
          </Card.Header>
          <Card.Meta>
            <span className="date">
              Reported on {props.details && props.details.reportedOn}
            </span>
          </Card.Meta>
          <Card.Description>
            {props.details && props.details.city} ,{" "}
            {props.details && props.details.state}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {props.details && props.details.notes}
        </Card.Content>
      </Card>
    </React.Fragment>
  );
}
