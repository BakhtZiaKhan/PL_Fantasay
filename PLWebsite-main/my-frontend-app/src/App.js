import React from 'react';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';

function App() {
    return (
        <div className="App">
            <h1>Welcome to the Player App</h1>
            <PlayerForm />
            <PlayerList />
        </div>
    );
}

export default App;