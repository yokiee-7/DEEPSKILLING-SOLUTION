import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Rohit', score: 85 },
    { name: 'Virat', score: 95 },
    { name: 'Rahul', score: 65 },
    { name: 'Shreyas', score: 45 },
    { name: 'Hardik', score: 78 },
    { name: 'Jadeja', score: 88 },
    { name: 'Ashwin', score: 55 },
    { name: 'Bumrah', score: 90 },
    { name: 'Shami', score: 60 },
    { name: 'Kuldeep', score: 72 },
    { name: 'Surya', score: 68 },
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}

      <h3>Players with score below 70</h3>
      {lowScorers.map((player, index) => (
        <p key={index}>{player.name}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
