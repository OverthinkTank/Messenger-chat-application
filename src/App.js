import React, { useState, useEffect } from 'react';
import './App.css';
import { Button , FormControl, Input, InputLabel} from '@material-ui/core';
import Message from './Message';
function App() {
  //Convention for STATE
  const [input, setInput] = useState('');
  const [messages,setMessages] = useState([
    {username: 'Joey' , text: "How you doin'?"},
    {username: 'Chandler', text: 'I am chandler. I am Funny'},
]);
  const [username,setUsername] = useState('');
  
  //useState --> variable in REACT
  //useEffect --> run this code on condition in REACT
  useEffect(()=>{
    /*run condition*/
    /*if it's blank inside[], this code runs once when app component loads*/
    /*if we have variable like input, it will run every single time it see the input */
    // const name = prop('Please Enter your name'); <--older way

    setUsername(prompt('please enter your name here'));
  }, [] )

  // console.log(input);
  // console.log(messages);
  // console.log(username);

  // Core logic of Sending a message
  const sendMessage = (event)=>{
      
      /* To prevent page from refreshing we are using event.preventDefault() as we are using <form>(it's default property is to refresh page onclick of SUBMIT button) */
      event.preventDefault();
      /*...messages used to append input to current message-->spreadout current messages*/
      setMessages([
        ...messages, { username:username , text:input }
      ]);
      setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome to fb-messenger</h1>
      <h2>Welcome {username}</h2>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter a message</InputLabel>
          <Input value = {input} onChange={event=>setInput(event.target.value)}/>    
          <Button disabled = {!input} variant = "contained" color = "primary" onClick={sendMessage}>SEND</Button>
        </FormControl>
        
        {
          messages.map(message => (
          /*We created Message.js and using it here as prop*/
          <Message username = {username} message = {message} />
          ))
        }



    </div>
  );
}

export default App;
