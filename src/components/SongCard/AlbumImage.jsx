import React from 'react';
import './AlbumImage.css';

export default function AlbumImage({url}) {
  return (
    <>
       <div className='albumImage'>
        <img src="../../assets/playlists/play1.jpg" alt="album art" className='albumImage-art' />
        <div className="albumImage-shadow">
        <img src="../../assets/playlists/play1.jpg" alt="shadow" className="albumImage-shadow"  />
      </div>
      </div>
      
    </>
   
  )
}
