import React from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/Home">
            <strong style={{ marginLeft: '10px' }}>{props.title}</strong>
          </a>
          <div className="form-check form-switch text-light">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={props.toggleChange}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {title:propTypes.string.isRequired, aboutText:propTypes.string}
Navbar.defaultProps = {
    title: "Title Here",
    aboutText: "About Text Here"
}