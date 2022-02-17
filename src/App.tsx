import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppSwitch from "./constants/AppSwitch";

const App: React.FC = () => {
  return (
    <Router>
      <AppSwitch />
    </Router>
  );
};

export default App;
