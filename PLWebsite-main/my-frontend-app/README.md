### Step 1: Set Up Your Development Environment

1. **Install Node.js and npm**: Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

2. **Install Create React App**: This is a command-line tool that helps you set up a new React project quickly.
   ```bash
   npm install -g create-react-app
   ```

### Step 2: Create a New React Project

1. **Create the React App**: Open your terminal and run the following command to create a new React application.
   ```bash
   npx create-react-app pl-frontend
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd pl-frontend
   ```

### Step 3: Install Axios for API Calls

Axios is a promise-based HTTP client for the browser and Node.js, which will help you make requests to your Spring Boot backend.

1. **Install Axios**:
   ```bash
   npm install axios
   ```

### Step 4: Set Up the Project Structure

You can create a simple structure for your project. Here’s an example:

```
pl-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── PlayerList.js
│   │   ├── PlayerForm.js
│   ├── App.js
│   ├── index.js
├── package.json
```

### Step 5: Create Components

1. **PlayerList Component**: This component will fetch and display the list of players.

   Create a file named `PlayerList.js` in the `src/components` directory:

   ```javascript
   // src/components/PlayerList.js
   import React, { useEffect, useState } from 'react';
   import axios from 'axios';

   const PlayerList = () => {
       const [players, setPlayers] = useState([]);

       useEffect(() => {
           const fetchPlayers = async () => {
               const response = await axios.get('http://localhost:8080/api/players'); // Adjust the URL as needed
               setPlayers(response.data);
           };
           fetchPlayers();
       }, []);

       return (
           <div>
               <h1>Player List</h1>
               <ul>
                   {players.map(player => (
                       <li key={player.name}>{player.name} - {player.team}</li>
                   ))}
               </ul>
           </div>
       );
   };

   export default PlayerList;
   ```

2. **PlayerForm Component**: This component will allow you to add a new player.

   Create a file named `PlayerForm.js` in the `src/components` directory:

   ```javascript
   // src/components/PlayerForm.js
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
           await axios.post('http://localhost:8080/api/players', newPlayer); // Adjust the URL as needed
           // Optionally, reset the form or update the player list
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
   ```

### Step 6: Update App Component

Now, you need to update the `App.js` file to include the new components.

```javascript
// src/App.js
import React from 'react';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';

function App() {
    return (
        <div className="App">
            <PlayerForm />
            <PlayerList />
        </div>
    );
}

export default App;
```

### Step 7: Run the Frontend Application

1. **Start the React App**:
   ```bash
   npm start
   ```

2. **Access the Application**: Open your browser and go to `http://localhost:3000` to see your frontend application in action.

### Step 8: Connect to the Backend

Make sure your Spring Boot backend is running on `http://localhost:8080` (or adjust the URLs in your Axios calls accordingly). You may also need to handle CORS (Cross-Origin Resource Sharing) in your Spring Boot application to allow requests from your frontend.

### Step 9: Handle CORS in Spring Boot

To enable CORS in your Spring Boot application, you can add the following configuration:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("http://localhost:3000");
    }
}
```

### Conclusion

You now have a basic frontend application set up to interact with your existing Java Spring Boot backend service. You can expand upon this by adding more features, styling, and improving the user experience as needed.