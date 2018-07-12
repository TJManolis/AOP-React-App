import React from "react";
import Sidebar from "./Sidebar.js";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Sidebar />
      </div>
    );
  }
}

export default Header;
