import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [text, setText] = useState(
    window.localStorage.getItem('text')
  );

  const setLocalStorage = value => {
    try {
      setText(value)
      window.localStorage.setItem("text", value)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Fragment>
      <textarea
        onChange={e => setLocalStorage(e.target.value)}
        value={text}
        placeholder="Qué está pasando?"
      />
      <button>Twittear</button>
    </Fragment>
  );
}

export default App;
