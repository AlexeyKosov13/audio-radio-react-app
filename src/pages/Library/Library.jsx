import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import APIKit from "../../spotify";
import "./Library.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);

  // useEffect(() => {
  //   APIKit.get("me/playlists").then(function (response) {
  //     setPlaylists(response.data.items);
  //   });
  // }, []);

  const navigate = useNavigate();

  const PlaylistsData = [
    {
      id: 1,
      name: "Vocal Transe",
      image: "../../assets/playlists/play1.jpg",
      total: 5,
    },
    {
      id: 2,
      name: "Deep House",
      image: "./assets/playlists/play1.jpg",
      total: 8,
    },
    {
      id: 3,
      name: "Rock",
      image: "./assets/playlists/play1.jpg",
      total: 2,
    },
    {
      id: 4,
      name: "Etno",
      image: "./assets/playlists/play1.jpg",
      total: 53,
    },
  ];

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  }

  return (
    <div className="screen__container">
      <div className="library__body">
        {PlaylistsData?.map((playlist) => (
          <div className="playlist__card" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
            <img src={playlist.image} alt="playlistArt" className="playlist__image"/>
            <p className="palylist__title">{playlist.name}</p>
            <p className="playlist__subtitle">{playlist.total} Songs</p>
            <div className="playlist__fade">
            <IconContext.Provider value={{size:"50px", color: "#e99d72"}}>
              <AiFillPlayCircle />
          </IconContext.Provider>
          </div>
          </div>
          
          
        ))}
      </div>
    </div>
  );
}
