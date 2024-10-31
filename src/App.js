import "./App.css";
import React from "react";
import { useImages } from "./hooks/useImages";
import CarouselContainer from "./components/carouselContainer";
import NavBar from "./components/navBar";

const App = () => {
  const results = useImages();
  return (
    <div className="App">
      <NavBar />
      <div className="carousel-container">
        {results.length > 0 && <CarouselContainer items={results} />}
      </div>
    </div>
  );
};

export default App;
