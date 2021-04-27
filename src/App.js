import './App.css';
import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'orchestra', label: 'Orchestra' } 
];

function App() {
  return (
    <div className="App">
      <Select className="mt-4 col-md-8 col-offset-4"
      options={options}
      />
    </div>
  );
}

export default App;
