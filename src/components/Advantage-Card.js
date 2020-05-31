import React from 'react';

function Advantage(props) {
  return (
    <div className="advantage">
      <img width="50px" src={props.url} />
      <h3><strong>{props.h3}</strong></h3>
      <p className="benefit-text">{props.p}</p>
    </div>
  );
}

export default Advantage;
