import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback='loading'>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Suspense>
  </React.StrictMode>
);
