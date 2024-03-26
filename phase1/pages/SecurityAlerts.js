import React, { useState, useEffect } from 'react';

function SecurityAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from mock API
    fetch('https://api.mockapi.com/security-alerts')
      .then(response => response.json())
      .then(data => setAlerts(data));
  }, []);

  return (
    <div>
      <h2>Security Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>
            <strong>{alert.title}</strong> - {alert.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SecurityAlerts;
