// Github.js
import React, { useState } from 'react';

const Github = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Github User Data</h1>
      <label>
        Enter Github username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button onClick={fetchData}>Fetch Data</button>

      {userData && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={userData.avatar_url}
            alt="Avatar"
            style={{ borderRadius: '50%', width: '100px', height: '100px' }}
          />
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Bio: {userData.bio}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
      )}
    </div>
  );
};

export default Github;
