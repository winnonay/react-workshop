import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <form id="search-form">
        <input
          type="city"
          placeholder="Enter City"
          autoFocus="on"
          id="search-input-text"
        />
        <br />
        <br />
        <input
          id="button"
          className="location-button"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
}
