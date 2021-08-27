import { Button, FormControl, InputLabel, Input, IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';
import SendIcon from '@material-ui/icons/Send';

function App() {
  //storing username and set username
  const [username, setUsername] = useState('');
  //calling on loading page and ask for user
  useEffect(() => {
    setUsername(prompt("Enter username: "))
  }, [])

  //store message as a array of object having username and text
  const [messages, setMessages] = useState([]);
  //take input that is text of message
  const [input, setInput] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
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
      {
        // prompt username is passed and whole object message is passed.
        messages.map(message => (<Message username={username} text={message} />))
      }
    </div>
  );
}

export default App;
