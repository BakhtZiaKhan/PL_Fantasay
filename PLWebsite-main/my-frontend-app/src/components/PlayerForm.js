import React, { useState } from 'react';
import axios from 'axios';

const PlayerForm = () => {
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [pos, setPos] = useState('');
  const [nation, setNation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = { name, team, pos, nation };
    try {
      await axios.post('http://localhost:8080/api/players', newPlayer);
      // Optionally reset form fields
      setName('');
      setTeam('');
      setPos('');
      setNation('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Team" value={team} onChange={(e) => setTeam(e.target.value)} required />
      <input type="text" placeholder="Position" value={pos} onChange={(e) => setPos(e.target.value)} required />
      <input type="text" placeholder="Nation" value={nation} onChange={(e) => setNation(e.target.value)} required />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default PlayerForm;