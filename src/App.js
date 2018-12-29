import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./Pages/Home";

function App() {
  return (
      <div>
        <Navbar />
        <Wrapper>
          <Home />
        </Wrapper>
        <Footer />
      </div>
    
  );
}

export default App;
