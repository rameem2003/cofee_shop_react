import React from "react";
import './App.css'
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
    </div>
  );
}

export default App;
