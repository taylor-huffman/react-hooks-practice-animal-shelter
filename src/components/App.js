import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const API = 'http://localhost:3001/pets'

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(pets => setPets(pets))
  }, [])

  function onChangeType(filterType) {
    setFilters({type: filterType})
  }

  function onFindPetsClick() {
    if (filters.type !== 'all') {
      fetch(`${API}?type=${filters.type}`)
      .then(r => r.json())
      .then(pets => setPets(pets))
    } else {
      fetch(API)
      .then(r => r.json())
      .then(pets => setPets(pets))
    }
  }

  function onAdoptPet(id) {
    // console.log(id)
    // const petsMinusAdopted = pets.filter(pet => pet.id !== id)
    // foundPet.isAdopted = true
    // console.log(foundPet)

    fetch(`${API}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        isAdopted: true
      })
    })
    .then(r => r.json())
    .then(() => fetch(API)
    .then(r => r.json())
    .then(pets => setPets(pets)))
  }

  // function onAdoptPet() {
  //   fetch(API)
  //   .then(r => r.json())
  //   .then(pets => setPets(pets))
  // }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} api={API} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
