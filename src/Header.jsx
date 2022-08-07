import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="./radio.png" alt="logo site" />
      </div>
      <div className="header__name">Radio world</div>
      <div className="header__select">
        <div className="header__item">Radio</div>
        <div className="header__item">Player</div>
      </div>
    </div>
  );
}
