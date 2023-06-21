import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/antd.min.css";
import "./i18n/configs";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

axios.defaults.headers["x-icode"] = "187123D9E9977E60";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
