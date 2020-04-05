import React, {Component} from 'react';
import './App.css';
let defaultStyle = {
  color: '#fff',
  background: '#000'
}
// create a component folder for Aggregate, [add other components to this list]
function Aggregate(){
  return (
    <div style={defaultStyle} >
      <h2>Number Text</h2>
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
  return (
    <div className="App">
      <h1>
        Title Bobby 
      </h1>
      <Aggregate> </Aggregate>
      <Filter></Filter>
      <Playlist></Playlist>
      <Playlist></Playlist>
      <Playlist></Playlist>
    </div>
  );
}


