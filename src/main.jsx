import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./assets/components/Card";
import data from "./assets/data";

export default function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return <main className="card-contents">{cards}</main>;
}
