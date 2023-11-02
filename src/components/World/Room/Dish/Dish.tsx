import React from 'react';
import Plates from "./Plates/Plates";
import Cakes from "./Cakes/Cakes";
import EatCakeAudio from "~/components/Audio/EatCakeAudio";

const Dish: React.FC = () => {
  return (
    <>
      <Plates />
      <Cakes />
      <EatCakeAudio />
    </>
  );
};

export default Dish;

