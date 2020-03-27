import React, { useEffect, useState } from "react";
import SiteGrid from "./Grid";
function App() {
  useEffect(() => {
    fetch("https://corona.lmao.ninja/countries/india")
      .then(res => res.json())
      .then(data => {
        setdailyStats(data);
      });
    return () => {};
  }, []);

  const [dailyStats, setdailyStats] = useState({});
  return (
    <div className="App">
      <SiteGrid
        deaths={dailyStats && dailyStats.deaths}
        recovered={dailyStats && dailyStats.recovered}
        cases={dailyStats && dailyStats.cases}
        today={dailyStats && dailyStats.todayCases}
      />
    </div>
  );
}

export default App;
