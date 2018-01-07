import React from "react";
import ReactDOM from "react-dom";
import { Container } from "rebass";

import App from "./app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Container>
    <App />
  </Container>,
  document.getElementById("root")
);
registerServiceWorker();
