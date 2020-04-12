import React, { useEffect, useState } from "react";
import SiteGrid from "./Grid";
function App() {
  useEffect(() => {
    fetch("https://corona.lmao.ninja/all")
      .then((res) => res.json())
      .then((data) => {
        setWorldStats(data);
      });
    return () => {};
  }, []);
  useEffect(() => {
    fetch("https://corona.lmao.ninja/countries/india")
      .then((res) => res.json())
      .then((data) => {
        setdailyStats(data);
      });
    return () => {};
  }, []);

  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/historical/india")
      .then((res) => res.json())
      .then((data) => {
        setHistoricalDataIndia(data);
      });
    return () => {};
  }, []);

  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/historical/usa")
      .then((res) => res.json())
      .then((data) => {
        setHistoricalDataUSA(data);
      });
    return () => {};
  }, []);

  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/historical/kr")
      .then((res) => res.json())
      .then((data) => {
        setHistoricalDataKR(data);
      });
    return () => {};
  }, []);
  const [dailyStats, setdailyStats] = useState({});
  const [historicalDataIndia, setHistoricalDataIndia] = useState({});
  const [historicalDataUSA, setHistoricalDataUSA] = useState({});

  const [historicalDataKR, setHistoricalDataKR] = useState({});

  const [worldStats, setWorldStats] = useState({});

  return (
    <div className="App">
      <SiteGrid
        deaths={dailyStats && dailyStats.deaths}
        recovered={dailyStats && dailyStats.recovered}
        cases={dailyStats && dailyStats.cases}
        today={dailyStats && dailyStats.todayCases}
        active={dailyStats && dailyStats.active}
        tests={dailyStats && dailyStats.tests}
        uat={dailyStats && new Date(dailyStats.updated).toLocaleTimeString()}
        timeline={historicalDataIndia && historicalDataIndia.timeline}
        timelineKR={historicalDataKR && historicalDataKR.timeline}
        timelineUSA={historicalDataUSA && historicalDataUSA.timeline}
        world={worldStats}
      />
      <div className="footer">
        Designed and Developed by{" "}
        <a href="https://github.com/ashishkumarsinghh">Ashish Kumar Singh.</a>
      </div>
    </div>
  );
}

export default App;
