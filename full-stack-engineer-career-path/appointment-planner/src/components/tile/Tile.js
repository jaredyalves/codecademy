import React from 'react';

export const Tile = ({data}) => {
  return (<div className="tile-container">
    {Object.values(data).
        map((value, index) => <p key={index} className={index === 0
            ? 'tile-title'
            : 'tile'}>{value}</p>)}
  </div>);
};
