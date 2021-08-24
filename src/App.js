import { Button, FormControl, FormHelperText, InputLabel, Input } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Message from './Message';

function App() {
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState('');
  const sendMessage = (event) => {
    event.preventDefault();
    setMessage([...message, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <form>
        <FormControl>
          <InputLabel>Enter Message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      {
        message.map(message => (<Message text={message} />))
      }
    </div>
  );
}

export default App;
