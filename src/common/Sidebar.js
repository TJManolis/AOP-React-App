import React from "react";
import "../styles.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uselessData: "0"
    };
  }

  menuButton = event => {
    let x = document.getElementById("Toggle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.menuButton} className="menuButton">
          <img src="https://cdn.iconscout.com/public/images/icon/free/png-512/menu-bar-lines-option-list-hamburger-web-3e773e8da7208b06-512x512.png" />
        </button>
        <div style={{ display: "none" }} id="Toggle" className="sidebar">
          <ul>
            <li>
              <a href="#home">Home</a>
              {/* Currently using # and not actual links */}
            </li>
            <li>
              <hr />
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#training">Training</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <hr />
              <a href="#activity">Activity</a>
            </li>
            <li>
              <a href="#newsletter">Archived Newsletter</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
