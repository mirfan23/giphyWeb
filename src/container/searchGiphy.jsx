import React, { useState, useRef, useEffect } from 'react';
import GiphyList from '../components/giphylist';
import SearchBar from '../components/searcBar';
import './searchGiphy.css';

function SearchGiphy() {
    const [gifs, setGifs] = useState([]);
    const fetchGifs = async query => {
        const apiKey = 'ZjM9I10Gux7764uBe7sbh4s4XC0vx04S';
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=9`;
        const response = await fetch(url);
        const { data } = await response.json();
        setGifs(data);
    };

    return (
        <div className="giphy-container" >
            <h1>SEARCH YOUR GIPHY</h1>
            <SearchBar onFormSubmit={fetchGifs} />
            <GiphyList gifs={gifs} />
        </div>
    );
}

export default SearchGiphy;
