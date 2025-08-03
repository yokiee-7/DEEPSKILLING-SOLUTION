import React from 'react';

const GuestPage = ({ onLogin }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Please sign up.</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default GuestPage;
