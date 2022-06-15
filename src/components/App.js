import React from 'react';
import Display from "./Display";
import Form from "./Form";

import '../App.css';

function App() {
  return (
    <div className="App">
      <header>What should I do today?</header>
      <Display />
      <Form />
    </div>
  );
}

export default App;