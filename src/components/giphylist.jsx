import React from 'react';
import './giphylist.css'

const GiphyList = ({ gifs }) => {
  return (
    <div className="giphy-list">
      {gifs && gifs.length > 0 ? (
        gifs.map(gif => (
          <img className="giphy-img" key={gif.id} src={gif.images.downsized.url} alt={gif.title} />
        ))
      ) : (
        <p>No GIFs found</p>
      )}
    </div>
  );
};

export default GiphyList;
