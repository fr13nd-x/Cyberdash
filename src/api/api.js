// api.js
import { API_BASE_URL, ENDPOINTS } from './config';

export const fetchIncidents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.INCIDENTS}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching incidents:', error);
    throw error;
  }
};

export const fetchVulnerabilities = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.VULNERABILITIES}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vulnerabilities:', error);
    throw error;
  }
};
