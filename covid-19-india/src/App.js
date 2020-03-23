import React, { useEffect, useState } from "react";
import SiteGrid from "./Grid";
function App() {
  useEffect(() => {
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
      .then(res => res.json())
      .then(data => {
        setdailyStats(data);
      });
    return () => {};
  }, []);
  useEffect(() => {
    fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org")
      .then(res => res.json())
      .then(data => {
        setunOfficial(data);
      });
    return () => {};
  }, []);
  const [dailyStats, setdailyStats] = useState({});
  const [unOfficial, setunOfficial] = useState({});
  return (
    <div className="App">
      {/* <h1> Official :{dailyStats.data && dailyStats.data.summary.total}</h1>
      <h1> Unofficial :{unOfficial.data && unOfficial.data.summary.total}</h1>
      <h1>
        {" "}
        Discharged :{dailyStats.data && dailyStats.data.summary.discharged}
      </h1>
      <h1> Deaths :{dailyStats.data && dailyStats.data.summary.deaths}</h1> */}
      <SiteGrid
        deaths={dailyStats.data && dailyStats.data.summary.deaths}
        recovered={dailyStats.data && dailyStats.data.summary.discharged}
        official={dailyStats.data && dailyStats.data.summary.total}
        cases={unOfficial.data && unOfficial.data.summary.total}
        details={
          unOfficial.data &&
          unOfficial.data.rawPatientData.reverse() &&
          unOfficial.data.rawPatientData
        }
      />
    </div>
  );
}

export default App;
