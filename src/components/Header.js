import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="mb-auto">
        <div>
          <img
            className="mb-4 nvb-img"
            src={require("../logo/NW_Squircle_RGB.png")}
            alt=""
            width="72"
            height="57"
          />
          <h3 className="float-md-start mb-0">Financial Planner</h3>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
