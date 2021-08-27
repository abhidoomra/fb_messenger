import { Button, FormControl, FormHelperText, InputLabel, Input } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';

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
      <form>
        <FormControl>
          <InputLabel>Enter Message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      {
        messages.map(message => (<Message username={message.username} text={message.text} />))
      }
    </div>
  );
}

export default App;
