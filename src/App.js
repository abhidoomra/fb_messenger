import { useState } from 'react';
import './App.css';

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
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button onClick={sendMessage}>Send Message</button>
      </form>
      {
        message.map(message => (<p>{message}</p>))
      }
    </div>
  );
}

export default App;
