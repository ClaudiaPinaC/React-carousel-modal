import { useEffect, useState } from "react";

export const useImages = () => {
  const [response, setResponse] = useState([]);

  const getImages = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const json = await res.json();
    setResponse(json.results);
  };

  useEffect(() => {
    getImages();
  }, []);

  return response;
};
