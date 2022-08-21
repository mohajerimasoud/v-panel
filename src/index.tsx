import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import AntdConfig from "./Components/antdConfig/AntdConfig";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AntdConfig>
      <App />
    </AntdConfig>
  </React.StrictMode>
);

reportWebVitals();
