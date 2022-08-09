import React from "react";
import { IconContext } from "react-icons/lib";
import { Link, useLocation } from "react-router-dom";
import "./SidebarButton.css";

export default function SidebarButton({ to, icon, title }) {
  const location = useLocation();

  const isActive = location.pathname === to;
  const btnClass = isActive ? "btn__item active" : "btn__item";
  return (
    <Link to={to}>
      <div className={btnClass}>
        <IconContext.Provider value={{size:"24px", className:"btn__icon"}}>
          {icon}
          <p className="btn__title">{title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}
