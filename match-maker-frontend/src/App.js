import React from "react";
import './App.css';
import Header from "./Header";
import FaceCards from "./FaceCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
           
      <Header />
      <FaceCards />
      <SwipeButtons />
      
    </div>
  );
}

export default App;
