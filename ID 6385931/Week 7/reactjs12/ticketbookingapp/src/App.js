import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      {isLoggedIn ? (
        <UserPage onLogout={handleLogout} />
      ) : (
        <GuestPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
