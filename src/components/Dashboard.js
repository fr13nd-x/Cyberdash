// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard/overview">Overview</Link></li>
          <li><Link to="/dashboard/incident-analysis">Incident Analysis</Link></li>
          <li><Link to="/dashboard/vulnerability-management">Vulnerability Management</Link></li>
          <li><Link to="/dashboard/user-management">User Management</Link></li>
        </ul>
      </nav>
      {/* Add dashboard components here */}
    </div>
  );
}

export default Dashboard;
