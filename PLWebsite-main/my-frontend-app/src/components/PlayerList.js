import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/players');
        setPlayers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.team} - {player.pos} - {player.nation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;