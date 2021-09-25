import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <h4> {props.name}</h4>
      <img src={props.battlegrounds.image} alt={props.battlegrounds.name} />
    </div>
  );
}

export default Card;
