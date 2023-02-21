import { useState } from 'react';
import './App.css';
import { Display } from './Display';
import { Form } from './Form';



const App = () => {
  const [string, updatedString] = useState([]);

  const handleOnSubmit = (newData) => {
    updatedString([...string, newData])
  }

  return (
    <div className="App">
      <Form handleOnSubmit={handleOnSubmit} />
      <Display string={string} />
    </div>
  );
}

export default App;
