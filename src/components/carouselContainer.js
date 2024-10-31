import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselContainer = ({ items }) => {
  console.log(items);
  return (
    <div>
      <Carousel>
        {items.map((el) => {
          return (
            <Carousel.Item>
              <img src={el.image} alt={el.name} width="600px" height="600px" />
              <Carousel.Caption>
                <h3>{el.name}</h3>
                <p>Specie: {el.species}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
