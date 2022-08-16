import React from 'react';
import AlbumInfo from './AlbumInfo';
import AlbumImage from './AlbumImage';
import './SongCard.css';

export default function SongCard({album}) {
  return (
    <div className='songCard flex'>
       <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  )
}
