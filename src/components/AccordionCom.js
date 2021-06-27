import { Accordion, Card, Button } from 'react-bootstrap';
import '../style/AccordionCom.css';

function AccordianCom() {
  return (
    <Accordion>
      <Card border="light">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="custom" eventKey="0">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card border="light">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="custom" eventKey="1">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card >
      <Card border="light">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="custom" eventKey="2">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card >
      <Card border="light">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="custom" eventKey="3">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card >
      <Card border="light">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="custom" eventKey="4">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card >
    </Accordion>
  );
}

export default AccordianCom;