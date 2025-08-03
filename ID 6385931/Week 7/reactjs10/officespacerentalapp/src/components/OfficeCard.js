import React from 'react';
import './OfficeCard.css';

const OfficeCard = ({ office }) => {
  const rentColor = office.rent <= 60000 ? 'textRed' : 'textGreen';

  return (
    <div className="card">
      <h2>{office.name}</h2>
      <img src={office.image} alt={office.name} width="300" height="200" />
      <p className={rentColor}>Rent: ₹{office.rent}</p>
      <p>Address: {office.address}</p>
    </div>
  );
};

export default OfficeCard;
