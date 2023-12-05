import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function ErrorPage() {
  

  return (
<Container className='d-flex  flex-column justify-content-center align-items-center vh-100'>
  <Card className='bg-danger justify-content-center align-items-center'>
    <Card.Header className='fs-1 text-bg-danger p-3' >Error404Page</Card.Header>
    <Card.Body className='align-items-center'>
      <Button className='m-2 fs-3 text-decoration-underline' variant='light' href='/'>Go Back</Button>
    </Card.Body>
  </Card>
    
</Container>
  );
}

export default ErrorPage;

