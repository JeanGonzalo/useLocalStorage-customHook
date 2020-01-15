import React, { Fragment, useState } from 'react';
import './App.css';
import { useLocalStorage } from './useLocalStorage'

function App() {

  const [text, setText] = useLocalStorage('text', '')

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
        onChange={e => setText(e.target.value)}
        value={text}
        placeholder="Qué está pasando?"
      />
      <button>Twittear</button>
    </Fragment>
  );
}

export default App;
