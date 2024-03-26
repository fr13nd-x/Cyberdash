import React, { useState, useEffect } from 'react';

function ThreatIntelligence() {
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    // Fetch data from external threat intelligence API
    // Replace 'https://external-api.com/threats' with actual API endpoint
    fetch('https://external-api.com/threats')
      .then(response => response.json())
      .then(data => setThreats(data));
  }, []);

  return (
    <div>
      <h2>Threat Intelligence</h2>
      <ul>
        {threats.map(threat => (
          <li key={threat.id}>
            <strong>{threat.title}</strong> - {threat.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThreatIntelligence;
