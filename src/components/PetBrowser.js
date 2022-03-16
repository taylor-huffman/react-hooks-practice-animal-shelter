import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, api, onAdoptPet }) {
  return <div className="ui cards">{
    pets.map(pet => <Pet key={pet.id} pet={pet} api={api} onAdoptPet={onAdoptPet} />)
  }</div>;
}

export default PetBrowser;
