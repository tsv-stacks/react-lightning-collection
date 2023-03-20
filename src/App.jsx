import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main";
import Navbar from "./assets/components/Navbar";
import "./assets/components/Card.css";
import Footer from "./assets/components/Footer";
import "./assets/components/Footer.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
