import React, {useState} from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff',
  background: '#000'
}

let fakeServerData = { 
    user : { name: "Bobby"},
    playlists: [
      {
        name: 'My Favorites',
        songs: [
          {name: 'Ma Bagnole', duration: 123} , 
          {name: 'She is Beautiful', duration: 300}, 
          {name: 'Glass Onion', duration: 400}
        ]
      },
      {
        name: 'Road Trip!', 
        songs: [
          {name: 'Chrome', duration: 400}, 
          {name: 'Edge', duration: 432}, 
          {name: 'FireFox', duration: 500}
        ]
      },
      {
        name: 'Playlist 3',
        songs: [
          {name: 'Chanson', duration: 1234}, 
          {name: 'Song', duration: 543}, 
          {name: 'Songu', duration: 654}
        ]
      }
    ]
  };

// create a component folder for Aggregate, [add other components to this list]
function PlaylistCounter(props){
  return (
    <div style={defaultStyle} >
      <h2> Number of Playlists: {props.count}  </h2>
    </div>
  );
}

function HoursCoutner(props){
  return (
    <div style={defaultStyle} >
      <h2> Number of Hours: {props.time}</h2>
    </div>
  );
}

function Filter(){
  return(
    <div style={defaultStyle}>
      <img/>
      <input type="text"/>
      Filter
    </div>
  );
}

function Playlist(){
  return(
    <div style={{...defaultStyle, width: "25%", display: "inline-block"}}>
      <img/>
      <h3>Playlist Name</h3>
      <ul>
      <li>Song 1</li><li>Song 2</li><li>Song 3</li>
      </ul>
    </div>
  );
}


export default function App() {

  let numPlaylists = fakeServerData.playlists.length;

  let allSongs = fakeServerData.playlists.reduce((songs, eachPlaylist) => {
    return songs.concat(eachPlaylist.songs)
  },[])

  let totalDuration = allSongs.reduce((sum, eachSong) => {
    return Math.round(((sum + eachSong.duration)/60))
  }, 0)  
  
  return (
    <div className="App">
      <h1>
        Title {fakeServerData.user.name} 
      </h1>
      <PlaylistCounter count={numPlaylists}> </PlaylistCounter>
      <HoursCoutner time={totalDuration}> </HoursCoutner>
      <Filter></Filter>
      <Playlist></Playlist>
      <Playlist></Playlist>
      <Playlist></Playlist>
    </div>
  );
}


