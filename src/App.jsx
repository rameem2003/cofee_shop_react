import React from "react";
import './App.css'
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Menu/>
      <Gallery/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
