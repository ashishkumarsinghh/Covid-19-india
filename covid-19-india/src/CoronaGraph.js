import React from "react";
import { Line } from "react-chartjs-2";
export default function CoronaGraph(props) {
  const options = {
    responsive: true,
  };
  return (
    <div className="coronaGraph">
      {props.timeline && props.timeline.cases && (
        <Line
          data={{
            labels: Object.keys(props.timeline.cases),
            datasets: [
              {
                label: "India",
                data: Object.values(props.timeline.cases).map((k, v) => k),
                backgroundColor: "#36a2eb",
                borderColor: "#36a2eb",
                fill: false,
              },
              {
                label: "South Korea",
                backgroundColor: "#e80213",
                borderColor: "#e80933",

                data: Object.values(props.timelineKR.cases).map((k, v) => k),
                fill: false,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}
