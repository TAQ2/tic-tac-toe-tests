import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "rebass";

import theme from "./theme";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider theme={theme}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
