import React from 'react';
import OfficeCard from './components/OfficeCard';

function App() {
  const officeList = [
    {
      name: 'DBS Chennai',
      rent: 50000,
      address: 'Anna Salai, Chennai',
      image: 'https://via.placeholder.com/300x200?text=DBS+Chennai'
    },
    {
      name: 'WeWork Bangalore',
      rent: 75000,
      address: 'MG Road, Bangalore',
      image: 'https://via.placeholder.com/300x200?text=WeWork+Bangalore'
    },
    {
      name: 'SmartSpace Coimbatore',
      rent: 60000,
      address: 'Race Course, Coimbatore',
      image: 'https://via.placeholder.com/300x200?text=SmartSpace+Coimbatore'
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>
      {officeList.map((office, index) => (
        <OfficeCard key={index} office={office} />
      ))}
    </div>
  );
}

export default App;
