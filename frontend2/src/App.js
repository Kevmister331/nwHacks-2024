import React, { useState } from "react"
import items from "./assets/champions.json" // Adjust the import path as needed
import "./App.css"

const BACKEND_URL = "http://localhost:5000"

const App = () => {
  const [selectedItem, setSelectedItem] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [songs, setSongs] = useState(
    [
      {
        title: "Die For You",
        artist: "Joji",
        url: "https://open.spotify.com/track/your-spotify-track-id",
      },
      {
        title: "1AM FREESTYLE",
        artist: "Joji",
        url: "https://open.spotify.com/track/your-spotify-track-id",
      },
      {
        title: "YEAH RIGHT",
        artist: "Joji",
        url: "https://open.spotify.com/track/your-spotify-track-id",
      },
      {
        title: "SLOW DANCING IN THE DARK",
        artist: "Joji",
        url: "https://open.spotify.com/track/your-spotify-track-id",
      },
      {
        title: "kill u",
        artist: "Cavetown",
        url: "https://open.spotify.com/track/your-spotify-track-id",
      },
      // Make sure to replace the URLs with the actual Spotify song URLs
    ]
    // ... other songs
  )

  const submitOptions = () => {
    if (selectedItem === "" || selectedType === "") {
      console.log("error submitting options, some still null")
    }
    console.log("Submitting options:", selectedItem, selectedType)

    const URL = BACKEND_URL// + "/" + "headers"
    console.log(URL)
    fetch(URL, {
      method: "GET",
    })
      .then((result) => {
        console.log(result + "success")
        return
      })
      .catch((err) => {
        console.log(err)
      })

    // Make your API call here
  }

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value)
  }

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value)
  }

  return (
    <div className="background">
      <div className="container">
        <h2>Leaguify</h2>
        <div>
          <select value={selectedItem} onChange={handleDropdownChange}>
            {items.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <h3>Select output type</h3>
        <div>
          <select value={selectedType} onChange={handleTypeChange}>
            <option value="Songs">Songs</option>
            <option value="Albums">Albums</option>
            <option value="Artists">Artists</option>
          </select>
        </div>
        <button label="Confirm Selection" onClick={submitOptions}>
          Generate
        </button>
        <p>{selectedType}</p>
      </div>

      <div className="song-list-container">
        <h1>Result</h1>
        <p>Get your top 5 tracks</p>
        <ul className="song-list">
          {songs.map((song, index) => (
            <li key={index} className="song-item">
              <span className="song-rank">{index + 1}</span>
              <a href={song.url} className="song-title" target="_blank" rel="noreferrer">
                {song.title}
              </a>
              <span className="song-artist">{song.artist}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App