import React from "react";
import SidebarButton from "./SidebarButton/SidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import {BiRadio } from "react-icons/bi";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar__container">
      <img
        src="./assets/profile.jpg"
        alt="profile"
        className="sidebar__profile"
      />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
              <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
              <SidebarButton title="Radio" to="/radio" icon={<BiRadio/>} />
      </div>
      <div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
      </div>
    </div>
  );
}
