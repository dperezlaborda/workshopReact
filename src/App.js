import React, { useState } from 'react';
import './App.css';
import Keys from './Keys';

function App() {

  const notes = [
    {
      name:"DO",
      link: require("./notes/do.wav"),
      tieneSostenido: true   //que tiene la tecla negra
    },
    {
      name:"RE",
      link: require("./notes/re.wav"),
      tieneSostenido: true
    },
    {
      name:"MI",
      link: require("./notes/mi.wav")
    },
    {
      name:"FA",
      link: require("./notes/fa.wav"),
      tieneSostenido: true
    },
    {
      name:"SOL",
      link: require("./notes/sol.wav"),
      tieneSostenido: true
    },
    {
      name:"LA",
      link: require("./notes/la.wav"),
      tieneSostenido: true
    },
    {
      name:"SI",
      link: require("./notes/si.wav")
    }
  ];

  const [playing, setPlaying] = useState(null);

  const handleClick = (note) =>{
    setPlaying(note.name);
    const noise = new Audio(note.link)
    noise.play()
    setTimeout(() =>{
      setPlaying(null)
    }, 200);
  }

  return (
    <div className="App">
        <div className="title">
          <h1>Pretty Little Piano</h1>
          <h2>by: dolo</h2>
        </div>
        <div className="note-container">{playing}</div>
        <div className="piano-container">
            {notes.map((note, i)=>{
              return(
                <Keys
                  key={i}
                  note={note}
                  playing={playing}
                  handleClick={handleClick}
                />
              )
            })
          }
        </div>
    </div>
  );
}

export default App;
