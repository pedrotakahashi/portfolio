import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import profilePicture from '../../Assets/images/mypic.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Content = () => {
  return (
    <Container className="content-contact">
      <Row align="center">
        <Col>
          <Card className="card-about-me">
            <Card.Img variant="top" src={profilePicture} />
            <Card.Body>
              <Card.Title>It's Me</Card.Title>
              <Card.Text>
                Meu nome é Pedro Takahashi <br />
                Sou desenvolvedor front end, com foco em React. <br />
                Também, tenho noções de python, node.js e testes unitários com Jest
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default Content;
