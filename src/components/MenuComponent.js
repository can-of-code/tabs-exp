import React from "react";
import "./MenuComponent.css";

function MenuComponent() {
  return (
    <div className="menu-container">
      <div className="menu-item">
        <h1>LINE UP</h1>
      </div>
      <div className="menu-item">
        <h1>MAP</h1>
      </div>
      <div className="menu-item">
        <h1>TICKETS</h1>
      </div>
      <div className="menu-item">
        <h1>CONTACT</h1>
      </div>
    </div>
  );
}

export default MenuComponent;
