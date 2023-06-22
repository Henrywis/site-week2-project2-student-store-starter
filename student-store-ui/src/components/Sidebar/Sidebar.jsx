import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="toggle-button">
        <button onClick={handleToggleSidebar}>Toggle</button>
      </div>
      <div className="shopping-cart">
        <div className="icons">
          <button>Icon 1</button>
          <button>Icon 2</button>
          <button>Icon 3</button>
        </div>
      </div>
    </div>
  );
}