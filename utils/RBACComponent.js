import React from 'react';

function AdminComponent() {
  return <div>This component is accessible only to administrators.</div>;
}

function AnalystComponent() {
  return <div>This component is accessible only to analysts.</div>;
}

function ViewerComponent() {
  return <div>This component is accessible only to viewers.</div>;
}

function RBACComponent({ role }) {
  switch (role) {
    case 'admin':
      return <AdminComponent />;
    case 'analyst':
      return <AnalystComponent />;
    case 'viewer':
      return <ViewerComponent />;
    default:
      return <div>Access denied.</div>;
  }
}

export default RBACComponent;
