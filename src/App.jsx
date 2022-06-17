import React from "react";
import './App.css'
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Menu/>
      <Gallery/>
    </div>
  );
}

export default App;
