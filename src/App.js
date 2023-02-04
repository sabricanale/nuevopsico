import React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"
import Banner from "./Components/Banner"
import ComoAyudo from "./Components/ComoAyudo";
import Modalidad from "./Components/Modalidad";
import SobreMi from "./Components/SobreMi";
import PreguntasFrecuentes from "./Components/PreguntasFrecuentes";

function App() {
  return (
    <div>
      <NavBar />
      <Banner/>
      <Modalidad/>
      <ComoAyudo/>
      <SobreMi/>
      <PreguntasFrecuentes/>
      
      
      <Footer/>

    </div>
  );
}

export default App;
