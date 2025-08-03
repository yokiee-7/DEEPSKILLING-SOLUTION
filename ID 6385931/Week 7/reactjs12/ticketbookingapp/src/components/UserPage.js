import React from 'react';

const UserPage = ({ onLogout }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome back</h2>
      <button onClick={onLogout}>Logout</button>
      {/* You can add your booking form or ticket details below */}
    </div>
  );
};

export default UserPage;
