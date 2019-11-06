import React from 'react';
import './messagelist.css';

const Dummy_messages =[
  {
    senderId:'John',
    text:'Hey! How are you doing?'
  },
  {
    senderId:'John',
    text:'Hey! How are you doing?'
  },
  {
    senderId:'John',
    text:'Hey! How are you doing?'
  },
  {
    senderId:'John',
    text:'Hey! How are you doing?'
  },
  {
    senderId:'John',
    text:'Hey! How are you doing?'
  },
  {
    senderId:'John',
    text:'Hey! How are you doing?'
  },
  {
    senderId:'John',
    text:'Hey! How are you doing?'
  },
]
const Reciever_messages =[
  {
    recieverId:'Avdesh',
    text:'Hey! How are you doing?'
  },
  {
    recieverId:'Avdesh',
    text:'Hey! How are you doing?'
  },
  {
    recieverId:'Avdesh',
    text:'Hey! How are you doing?'
  },
  {
    recieverId:'Avdesh',
    text:'Hey! How are you doing?'
  },

]

class Messagelist extends React.Component {
  render(){
  return (
    <div className="messages">
        <div><h3>Messages</h3></div>
        <hr></hr>
        <div className="chatcontainer">
        {Dummy_messages.map((message,index)=>{
          return(
            <div>
            <div className="you">{message.senderId}</div>
            <div className="sender">{message.text}</div>
            <div className="reciever">{message.text}</div>
            </div>
            )})}
        
        </div>
    </div>
  );
}
}

export default Messagelist;
