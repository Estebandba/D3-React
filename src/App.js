import React from 'react';
import ChartWrapper from './ChartWrapper';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">

      <Navbar bg="light">
        <Navbar.Brand>Barchartly</Navbar.Brand>
      </Navbar>
      <Container>
        <ChartWrapper />
      </Container>
    </div>
  );
}

export default App;
