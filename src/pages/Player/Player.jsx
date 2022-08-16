import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import apiClient from '../../spotify';
import SongCard from '../../components/SongCard/SongCard';
import Queue from '../../components/Queue/Queue';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import './Player.css';

export default function Player() {

  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if (location.state) {
      apiClient.get("playlists/" + location.state?.id + "/tracks")
      .then((res) => {
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      })
    }
  }, [location.state])

  // useEffect(() => {
  //   setCurrentTrack(tracks[currentIndex].track);
  // }, [currentIndex, tracks])


  return (
    <div className='screen__container flex'>
      <div className="left__player">
        <AudioPlayer />
      </div>
      <div className="right__player">
        <SongCard album={ currentTrack.album} />
        <Queue tracks={tracks} setCurrentIndex={ setCurrentIndex} />
      </div>
    </div>
  )
}
