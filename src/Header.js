import React from "react";

function Header() {
  return (
    <div>
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Financial Planner</h3>
          <img
            className="mb-4 nvb-img"
            src={require("./NW_Squircle_RGB.png")}
            alt=""
            width="72"
            height="57"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;