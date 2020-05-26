import React from "react";
import { Router } from "@reach/router";
import * as Pages from "./pages";

console.log(Pages);

const App = () => {
  return (
    <div>
      <h1>Creator App @ The Culture Trip</h1>
      <Router>
        <Pages.NotFound default />
        <Pages.Tasks path="/" />

        <Pages.Auth path="auth/*" />
      </Router>
    </div>
  );
};

export default App;
