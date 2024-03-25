import React, { useState, useEffect } from 'react';

function IncidentAnalysis() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    // Simulate fetching data from mock API
    fetch('https://api.mockapi.com/incidents')
      .then(response => response.json())
      .then(data => setIncidents(data));
  }, []);

  return (
    <div>
      <h2>Incident Analysis</h2>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>{incident.title}</strong> - {incident.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentAnalysis;
