import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "rebass";

import App from "./app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
