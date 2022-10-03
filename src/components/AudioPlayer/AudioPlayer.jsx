import React from 'react';
import HeaderPlayer from './HeaderPlayer';
import ActionsPlayer from './ActionsPlayer';
import PlayList from './Playlist';
import Controls from './Controls';
import './AudioPlayer.css';

export default function AudioPlayer() {
  return (
    <div className='audioPlayer'>
      <div className="inside__content">
        <HeaderPlayer />
        <ActionsPlayer />
        <PlayList />
      </div>
      <Controls />
    </div>
  )
}
