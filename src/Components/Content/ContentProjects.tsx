import React from "react"
import { Button, Container, Row, Col, Form, Card } from "react-bootstrap"
import { GrGithub } from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Content = () => {

  return (
    <Container className="content-contact">
      <Row lg={3} className="mx-auto">
        <Col></Col>
        <Col>
          <Card className="projects-card" >
            <Card.Body>
              <Card.Title>Repositorio Github</Card.Title>
              <Card.Text className="text-project">
                Clique  aqui para conhecer meu repositorio
              </Card.Text>
              <Button variant="#563d7c" href="https://github.com/pedrotakahashi/" target="blank"><GrGithub className="icon-github" /></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
export default Content;