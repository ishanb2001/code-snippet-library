// src/App.js

import React from 'react';
import Navbar from './Navbar'; // Adjust the path as necessary
import Sidebar from './Sidebar';
import './App.css'; // Assuming your styles will be here
import {Code} from "@nextui-org/react";


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          {/* Main content goes here */}
          <p>Main Content</p>
          <Code>npm install @nextui-org/react</Code>
        </main>
      </div>
    </div>
  );
}

export default App;
