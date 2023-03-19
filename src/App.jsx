import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main";
import Navbar from "./assets/components/Navbar";
import './assets/components/Card.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Navbar /> */}
  </React.StrictMode>,
)
