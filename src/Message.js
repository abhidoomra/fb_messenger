import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css';

// to have reference
// higher order function es6
const Message = forwardRef(({ username, text }, ref) => {
    const user = username === text.username; //if message send is our username
    return (

        <Card ref={ref} className={`message__card ${user ? "message__card-user" : "message__card-guest"}`}>
            <CardContent>
                {/* variant make it appear h5 but component make html element of h2 */}
                <Typography color="white" variant="h5" component="h2" >
                    {!user && `${text.username || `Unknown User`}: `} {text.text}
                </Typography>
            </CardContent>
        </Card>
    )
})

export default Message
