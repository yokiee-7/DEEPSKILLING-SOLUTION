import React from 'react';

const IndianPlayers = () => {
  const IndianTeam = ['Rohit', 'Virat', 'Rahul', 'Shreyas', 'Hardik', 'Jadeja'];

  const OddPlayers = ([, second, , fourth, , sixth]) => {
    return (
      <div>
        <h3>Odd Team Players</h3>
        <p>{second}</p>
        <p>{fourth}</p>
        <p>{sixth}</p>
      </div>
    );
  };

  const EvenPlayers = ([first, , third, , fifth]) => {
    return (
      <div>
        <h3>Even Team Players</h3>
        <p>{first}</p>
        <p>{third}</p>
        <p>{fifth}</p>
      </div>
    );
  };

  const T20players = ['Rohit', 'Virat', 'Rahul'];
  const RanjiTrophy = ['Pujara', 'Rahane', 'Iyer'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      {OddPlayers(IndianTeam)}
      {EvenPlayers(IndianTeam)}

      <h3>Merged Players</h3>
      {mergedPlayers.map((player, index) => (
        <p key={index}>{player}</p>
      ))}
    </div>
  );
};

export default IndianPlayers;
