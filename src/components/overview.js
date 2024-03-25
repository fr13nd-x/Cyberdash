import React, { useState, useEffect } from 'react';

function Overview() {
  const [threatLevel, setThreatLevel] = useState('');
  const [incidentCount, setIncidentCount] = useState(0);
  const [vulnerabilityCount, setVulnerabilityCount] = useState(0);

  useEffect(() => {
    // Simulate fetching data from mock API
    fetch('https://api.mockapi.com/threat-level')
      .then(response => response.json())
      .then(data => setThreatLevel(data.threatLevel));

    fetch('https://api.mockapi.com/incidents/count')
      .then(response => response.json())
      .then(data => setIncidentCount(data.count));

    fetch('https://api.mockapi.com/vulnerabilities/count')
      .then(response => response.json())
      .then(data => setVulnerabilityCount(data.count));
  }, []);

  return (
    <div>
      <h2>Overview</h2>
      <p>Threat Level: {threatLevel}</p>
      <p>Incident Count: {incidentCount}</p>
      <p>Vulnerability Count: {vulnerabilityCount}</p>
    </div>
  );
}

export default Overview;
