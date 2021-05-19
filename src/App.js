import './App.css';
import React, { useState } from 'react';
import { useImages } from './hooks/useImages';
import Container from './components/Container';

function App() {
  const results = useImages();
  const [ currentImage, setCurrentImage ] = useState(0);
  const previousImage = () => {
    if(currentImage > 0){
      setCurrentImage(currentImage - 1)
    }
  }
  const nextImage = () => {
    if(currentImage < results.length-1){
      setCurrentImage(currentImage + 1)
    }
  } 
  return (
    <div className="App">
      {
        results.length > 0 && 
        <Container item={results[currentImage]}/>
      }
      <button onClick={previousImage}>Previous Image</button>
      <button onClick={nextImage}>Next Image</button>
    </div>
  );
}

export default App;
