import React from "react";
export default function Patient(props) {
  return (
    <React.Fragment>
      <div className="patientDetail">
        <h2>Patient ID : {props.details && props.details.patientId}</h2>
        <p>Reported on {props.details && props.details.reportedOn}</p>
        <p>
          {props.details && props.details.city} ,
          {props.details && props.details.state}
        </p>
        <p>{props.details && props.details.notes}</p>
      </div>
    </React.Fragment>
  );
}
