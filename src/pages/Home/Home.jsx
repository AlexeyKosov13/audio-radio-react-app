import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import Library from "../Library/Library";
import Player from "../Player/Player";
import Favorites from "../Favorites/Favorites";
import Trending from "../Trending/Trending";

import "./Home.css";
import Radio from "../Radio/Radio";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="main__body">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" axact element={<Library />} />

          <Route path="/feed" exact element={<Feed />} />

          <Route path="/trending" exact element={<Trending />} />

          <Route path="/player" exact element={<Player />} />

          <Route path="/favorites" exact element={<Favorites />} />

          <Route path="/radio" exact element={<Radio />} />
        </Routes>
      </Router>
    </div>
  );
}
