import React from "react";

function Pet({ pet, api, onAdoptPet }) {

  const { id, type, gender, age, weight, name, isAdopted } = pet
  

  // function handleOnClick() {
  //   fetch(`${api}/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       isAdopted: true
  //     })
  //   })
  //   .then(r => r.json())
  //   .then(() => onAdoptPet())
  // }


  function handleOnClick() {
    onAdoptPet(id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === 'male' ? '♂ ' : '♀ '}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? <button className={isAdopted ? "ui button" : "ui disabled button"}>Already adopted</button> : null}
        {isAdopted ? null : <button onClick={handleOnClick} className={isAdopted ? "ui disabled primary button" : "ui primary button"}>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;
