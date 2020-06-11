import React from 'react';
import Navbar from "../containers/navbar";
import ActiveDashboard from "../containers/active-dashboard";

const btns = ["fas fa-tachometer-alt", "fas fa-graduation-cap", "fas fa-star", "fas fa-comments"];
const test3 = {
  chap1: 13,
  chap2: 27,
  chap3: 52
}

const App = () => {
  return (
    <div className="app">
      <Navbar btns={btns} />
      <div className="content">
        <ActiveDashboard test3={JSON.stringify(test3)} />
      </div>
    </div>
  );
};

export default App;
