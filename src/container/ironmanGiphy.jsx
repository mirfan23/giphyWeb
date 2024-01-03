import React, { useState, useEffect, useRef} from 'react';
import GifList from '../components/giphylist';

function IronManGiphy() {
  const [ironManGifs, setIronManGifs] = useState([]);

  useEffect(() => {
    const fetchIronManGifs = async () => {
      try {
        const apiKey = 'ZjM9I10Gux7764uBe7sbh4s4XC0vx04S'; // Ganti dengan API key Giphy Anda
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=iron man&limit=9`;
        const response = await fetch(url);
        const { data } = await response.json();
        setIronManGifs(data);
      } catch (error) {
        console.error('Error fetching Iron Man GIFs:', error);
      }
    };

    fetchIronManGifs();
  }, []);

  return (
    <div className="giphy-container">
      <h1>Iron Man Giphy</h1>
      <GifList gifs={ironManGifs} />
    </div>
  );
}

export default IronManGiphy;
