import { Button, FormControl, InputLabel, Input, IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';
import SendIcon from '@material-ui/icons/Send';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';


function App() {
  //storing username and set username
  const [username, setUsername] = useState('');
  //calling on loading page and ask for user
  useEffect(() => {
    // run once when app loads
    //snapshot run every single time dataabase take change pic
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })));
    })
  }, [])
  // id to have key and render only key elemnet not all

  // useEffect(() => {
  //   //when app.js loads
  //   db.collection('messages').onSnapshot(snapshot => {
  //     setMessages()
  //   })
  // }, [])

  useEffect(() => {
    setUsername(prompt("Enter username: "))
  }, [])

  //store message as a array of object having username and text
  const [messages, setMessages] = useState([]);
  //take input that is text of message
  const [input, setInput] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, { username: username, text: input }]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Facebook Messenger</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input className="app__input" placeholder="Enter message" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" type="submit" disabled={!input} variant="contained" color="primary" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
          {/* icon button wrap sendicon and make it as button */}
        </FormControl>
      </form>
      <FlipMove>
        {
          // prompt username is passed and whole object message is passed.
          messages.map(({ id, message }) => (<Message key={id} username={username} text={message} />))
          // key is to render only new value not old
        }
      </FlipMove>
    </div>
  );
}

export default App;
