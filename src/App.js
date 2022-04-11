import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Registration from "./component/Registration";
import Welcome from "./component/Welcome";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
