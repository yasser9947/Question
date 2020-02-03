import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Question } from './Question';
import { AddQuetion } from './AddQuetion/AddQuetion';

function App() {
  return (
    <div>
      <div className="margen"></div>
      {/* <Question /> */}
      <AddQuetion />
    </div>
  );
}

export default App;
