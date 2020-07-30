import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl, Input} from '@material-ui/core';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function App() {
  //Convention for STATE
  const [input, setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');
  
  //useState --> variable in REACT
  //useEffect --> run this code on condition in REACT

  useEffect(()=>{
    /*-----runs only once when page is loaded bcox at the end in syntax is empty array------*/
    db.collection('messages')
    .orderBy('timestamp' , 'desc')
    .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id : doc.id, message: doc.data()})))
    });
  }, [] )
  
  // submitHandler(e) {
  //   e.preventDefault();
  // }

  useEffect(()=>{
    /*run condition*/
    /*if it's blank inside[], this code runs once when app component loads*/
    /*if we have variable like input, it will run every single time it see the input */
    /* const name = prop('Please Enter your name'); <--older way */
    setUsername(prompt('Please enter your name here'));
  }, [] )

  // Core logic of Sending a message
  const sendMessage = event => {
    
    event.preventDefault();
      /* To prevent page from refreshing we are using event.preventDefault() as we are using <form>(it's default property is to refresh page onclick of SUBMIT button) */
      
      /*...messages used to append input to current message-->spreadout current messages*/
      db.collection('messages').add({
        message: input,
        username : username,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
      })
      
      // setMessages([
      //   ...messages, { username:username , message:input }
      // ]);
      setInput('');
  }

  return (
    <div className="App">
      <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Facebook_Messenger_4_Logo.svg/100px-Facebook_Messenger_4_Logo.svg.png?h=100&w=100" />
      <h1>Welcome to fb-messenger</h1>
      <h2>Welcome {username}</h2>
        <div className = "form_container">
        <form className = "app_form" onSubmit = {sendMessage}>
          <FormControl className = "app_formControl" >
            <Input className = "app_input" placeholder = "Enter a message..." value = {input} onChange={event=>setInput(event.target.value)}/>    
            <IconButton className = "app_iconButton" disabled = {!input} variant = "contained" color = "primary" onClick={sendMessage}>
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
      </div>

      <FlipMove>
        {
          messages.map(({id,message}) => (
          /*We created Message.js and using it here as prop*/
          <Message key={id} username = {username} message = {message} />
          ))
        }
      </FlipMove>
        
      </div>
  );
}

export default App;
