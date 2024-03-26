import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import mockdata from './mockdata.json'; // Import mock data

const Dashboard = () => {
  const [incidentData, setIncidentData] = useState([]);
  const [vulnerabilityData, setVulnerabilityData] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Set incident and vulnerability data from mockdata
    setIncidentData(mockdata.map(item => ({
      id: item.id,
      title: item.incident_title,
      description: item.incident_description
    })));
    setVulnerabilityData(mockdata.map(item => ({
      id: item.id,
      title: item.vulnerability_title,
      description: item.vulnerability_description
    })));

    // Generate dummy chart data
    const chartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Threat Level',
          data: [3, 2, 5, 4, 6, 7],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };
    setChartData(chartData);
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cyber Security Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#overview">Overview</Nav.Link>
            <Nav.Link href="#incident-analysis">Incident Analysis</Nav.Link>
            <Nav.Link href="#vulnerability-management">Vulnerability Management</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Overview</Card.Title>
                <Card.Text>
                  Key cybersecurity metrics
                </Card.Text>
                <Line data={chartData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Incident Analysis</Card.Title>
                <Card.Text>
                  Recent security incidents
                </Card.Text>
                <ul>
                  {incidentData.map(incident => (
                    <li key={incident.id}>{incident.title}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Vulnerability Management</Card.Title>
                <Card.Text>
                  Known vulnerabilities
                </Card.Text>
                <ul>
                  {vulnerabilityData.map(vulnerability => (
                    <li key={vulnerability.id}>{vulnerability.title}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
