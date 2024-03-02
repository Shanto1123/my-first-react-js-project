import React from 'react';
import { useState } from 'react'; // Assuming you're using useState somewhere in your component
import Navbar from "./component/Navbar"; // Assuming Navbar component is in PascalCase
import './App.css';
import Footer from './component/footer';


const App = () => {
  return (
    <div> 
       <Navbar />
       {/* <h1>{new Date().getVarDate()}</h1> */}
      <div>
        <h2> Install react js and vite js</h2><hr />
        <h3>npm create vite - for Create a react js </h3>
        <h3>npm install -for install Node modules </h3>
        <h3>npm run dev / npx vite  - for Run react js project</h3>
        <h3>npm run build /npx vite build - for distrubation build folder  </h3>
      </div>
     
      <Footer />
      
    </div>
  );
}

export default App;