import './App.css';
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'orchestra', label: 'Orchestra' } 
];

function App() {
  return (
    <div className="App">
      <Select options={options}/>
    </div>
  );
}

export default App;
