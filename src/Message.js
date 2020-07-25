import React from 'react'
import { Typography, CardContent, Card } from '@material-ui/core'
import './Message.css';
function Message({message , username}) {
    const isUser = username === message.username;
    // console.log(isUser);
    return (
        <div  className = {`message_card ${isUser && 'message_sender'}`} >
            <Card className = {isUser ? "message_sender" : "message_receiver"}>
                
                <CardContent>
                    <Typography variant = "h5" component = "h2">
                        {message.username}:  {message.text}                
                    </Typography>
                </CardContent>   
            </Card>  
        </div>
    )
}

export default Message
