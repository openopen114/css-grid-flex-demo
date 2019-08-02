import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";

import routes from "./routes.js";
import "./App.css";

function App() {
  return <Fragment>{renderRoutes(routes)}</Fragment>;
}

export default App;
