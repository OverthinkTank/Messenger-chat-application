import React, { forwardRef } from 'react';
import { Typography, CardContent, Card } from '@material-ui/core'
import './Message.css';

//Message is a function
const Message = forwardRef(({message , username},ref) => {
    const isUser = username === message.username;
    // console.log(isUser);
    return (
        <div  ref = {ref} className = {`message ${isUser && 'message_sender'}`} >
            <Card className = {isUser ? "message_sender" : "message_receiver"}>
                
                <CardContent>
                    <Typography variant = "h5" component = "h2">
                        {!isUser && `${message.username || 'Anonymous User'}: `} {message.message}                
                    </Typography>
                </CardContent> 

            </Card>  
        </div>
    )
})

export default Message
