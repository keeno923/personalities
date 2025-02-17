import './index.css';
import { useState } from 'react';
import { songsList } from './data.tsx';

export default function MusicGallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < songsList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(songsList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let song = songsList[index];

  return (
    <div className="music-container">
      <h1>TOP 10 SONGS OF ALL TIME</h1>
      <div className="buttons">
        <button onClick={handleBackClick}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <h2><b>{song.name}</b> by {song.artist}</h2>
      <h3>{index + 1} of {songsList.length}</h3>
      <button className='showm' onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && (
        <div className="song-details">
          <p><b>Release Year:</b> {song.year}</p>
          <p><b>Genre:</b> {song.genre}</p>
          <p><b>Description:</b> {song.description}</p>
        </div>
      )}
      <img className="album-art" src={song.url} alt={song.alt} />
    </div>
  );
}