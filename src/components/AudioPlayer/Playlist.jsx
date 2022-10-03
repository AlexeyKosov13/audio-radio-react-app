import { useContext } from 'react';
import {songslist} from '../../context/songs';
import './Playlist.css';

const Playlist = () => {
  return (
    <div className='playlist'>
      <ul className="loi">
        {
          songslist.map((song, i) => (
            <li className="songContainer"></li>
          ))
        }
      </ul>
    </div>
  )
}

export default Playlist