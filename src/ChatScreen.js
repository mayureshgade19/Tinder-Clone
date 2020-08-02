import React, { useState } from 'react';
import './ChatScreen.css';
import  Avatar  from '@material-ui/core/Avatar';

function ChatScreen() {

    const[messages, setMessages] = useState([
        {
            name: 'allen',
            image: '...',
            message: 'whats up'            
        },
        {
            name: 'allen',
            image: '...',
            message: 'hows going '            
        },
        {
            message:'hi'
        }
    ])

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>You Matched with ellen on 10/06/20</p> 
            {messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                    <Avatar
                        className='chatScreen__image'
                        alt={message.name}
                        src={message.image} 
                    />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
                ):(
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                )
            ))}

            <div>
                <form className='chatScreen__input'>
                    <input className='chatScreen__inputField' type='text' placeholder='type message...' />
                    <button className='chatScreen__inputButton'>SEND</button>
                </form>
            </div>

        </div>
    )
}

export default ChatScreen
