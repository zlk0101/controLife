import React from "react";
import { AppState } from "./src/context/AppState";
import Router from "./src/routes/Router";
const App = () => {
  return (
    <AppState>
      <Router />
    </AppState>
  );
};

export default App;
