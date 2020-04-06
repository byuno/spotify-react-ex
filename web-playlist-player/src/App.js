import React from 'react';
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
        name: 'We ded',
        songs: [
          {name: 'Kin', duration: 1234}, 
          {name: 'Lumia', duration: 543}, 
          {name: 'Zune', duration: 654}
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
      <img alt=''/>
      <input type="text"/>
      Filter
    </div>
  );
}

function Playlist(props){
  console.log(props)
  return(
    <div style={{...defaultStyle, width: "25%", display: "inline-block"}}>
      <img alt=''/>
      <h3>{props.playlist.name}</h3>
      <ul>
        {props.playlist.songs.map(song => 
          <li>{song.name}</li>
        )}
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
      <PlaylistCounter count={numPlaylists}/> 
      <HoursCoutner time={totalDuration}/> 
      <Filter/> 
        {
          fakeServerData.playlists.map(playlist => 
            <Playlist key={playlist.name} playlist={playlist} />
  
        )}
    </div>
  );
}


