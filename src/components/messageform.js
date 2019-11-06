import React from 'react';
import './message.css';

function Messageform() {
  return (
    <div className="App">
    <input className="textbox" type="text" placeholder="Start Typing Your Message Here :)"/>
    <button className="send_btn"></button>
    </div>
  );
}

export default Messageform;
