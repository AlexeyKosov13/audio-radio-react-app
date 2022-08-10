import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import Library from "../Library/Library";
import Player from "../Player/Player";
import Favorites from "../Favorites/Favorites";
import Trending from "../Trending/Trending";
import Login from "../Auth/Login";

import "./Home.css";
import Radio from "../Radio/Radio";
import Sidebar from "../../components/Sidebar/Sidebar";
import { setClientToken } from "../../spotify";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main__body">
        <Sidebar />
        <Routes>
          <Route path="/" axact element={<Library />} />
          <Route path="/feed" exact element={<Feed />} />
          <Route path="/trending" exact element={<Trending />} />
          <Route path="/player" exact element={<Player />} />
          <Route path="/favorites" exact element={<Favorites />} />
          <Route path="/radio" exact element={<Radio />} />
        </Routes>
      </div>
    </Router>
  );
}
